import { act } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../Mocks/mockResMenu.json";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import Header from "../Header";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

describe("test cases related to cart ", () => {
  it("should load restaurant menu component", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
            <Cart />
          </Provider>
        </BrowserRouter>
      );
    });

    const accordianHeader = await screen.findByText("Dessert(4)");
    fireEvent.click(accordianHeader);
    screen.getAllByTestId("foodItems");

    expect(screen.getAllByTestId("foodItems").length).toBe(4);
    const addBtn = screen.getAllByRole("button", { name: "Add +" });

    expect(addBtn[0]).toBeInTheDocument();
    fireEvent.click(addBtn[0]);
    fireEvent.click(addBtn[1]);

    expect(screen.getByText("(2)")).toBeInTheDocument();
    expect(screen.getAllByTestId("foodItems").length).toBe(6);

    //for clearing cart
    fireEvent.click(screen.getByRole("button", { name: "clear Cart" }));
    //whenever we added items inside the cart then for displying card it again update the restaurant items so that foodItems data-testid assign to cart page items also.
    // expect(screen.getAllByTestId("foodItems").length).toBe(4);
    expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
  });
});
