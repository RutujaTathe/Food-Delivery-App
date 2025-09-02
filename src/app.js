import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/about";
import Error from "./components/Error";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./Utils/UserContext.js";
import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore.js";
import Cart from "./components/Cart.js";
const styleCard = {
  backgroundColor: "#f0f0f0",
};

const Grocery = lazy(() => import("./components/Grocery"));

const APPLayout = () => {
  const [userName, setUserName] = useState();
  //authentication
  useEffect(() => {
    //make the api call and send username and password
    const data = {
      name: "rutuja tathe",
    };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <UserContext.Provider value={{ loggedInUser: "Rutuja Tathe" }}>
            {/** Header */}
            <Header />
          </UserContext.Provider>
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
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
      {
        path: "/cart",
        element: <Cart />,
      },
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
