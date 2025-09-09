import { render, fireEvent } from "@testing-library/react";
import Header from "../Header";
import appStore from "../../utils/appStore.js";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("should load header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", { name: "LogIn" });
  //   const loginButton = screen.getByText("Login");
  expect(loginButton).toBeInTheDocument();
});

it("should render header component with cart items zero", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartItems = screen.getByText("(0)");
  //   const loginButton = screen.getByText("Login");
  expect(cartItems).toBeInTheDocument();
});

it("should render header component with cart items", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartItems = screen.getByText("(0)");
  //   const loginButton = screen.getByText("Login");
  expect(cartItems).toBeInTheDocument();
});
it("should change logIn to Logout after click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", { name: "LogIn" });
  fireEvent.click(loginButton);

  const logOutbutton = screen.getByRole("button", { name: "Logout" });
  //   const loginButton = screen.getByText("Login");
  expect(logOutbutton).toBeInTheDocument();
});
