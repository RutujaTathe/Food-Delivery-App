import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/about";
import Error from "./components/Error";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import RestaurantMenu from "./components/RestaurantMenu";
const styleCard = {
  backgroundColor: "#f0f0f0",
};

const Grocery = lazy(() => import("./components/Grocery"));

const APPLayout = () => {
  return (
    <div className="app">
      {/** Header */}
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <APPLayout />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
    ],
    errorElement: <Error />,
  },

  {
    path: "",
    element: <Body />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
