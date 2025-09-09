import Body from "../Body";
import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../Mocks/BodyMock.json";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import { act } from "react";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
//fake an api call
xit("should check the search functionality and render body compoenent", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Body />
        </Provider>
      </BrowserRouter>
    )
  );
  const cardsBeforeSearch = screen.getAllByTestId();
  expect(cardsBeforeSearch.length).toBe(20);
  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "burger" } });
  fireEvent.click(searchBtn);

  //screen should load 4 cards
  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(4);
  expect(searchBtn).toBeInTheDocument();
});

xit("should filter top rated Restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Body />
        </Provider>
      </BrowserRouter>
    )
  );
  const cardsBeforeSearch = screen.getAllByTestId();
  expect(cardsBeforeSearch.length).toBe(20);
  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });
  fireEvent.click(topRatedBtn);
  const cardsAfterFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(13);
});
