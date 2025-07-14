import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/about";
import Error from "./components/Error";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ContactUs from "./components/ContactUs";
const styleCard = {
  backgroundColor: "#f0f0f0",
};

const APPLayout = () => {
  return (
    <div className="app">
      {/*Header */}
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <APPLayout />,
    errorElement: <Error />,
  },

  {
    path: "",
    element: <Body />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contact",
    element: <ContactUs />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
