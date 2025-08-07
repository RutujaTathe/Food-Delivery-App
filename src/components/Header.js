import { useState } from "react";
import { LOGO_URL } from "../Utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
const Header = () => {
  let [btnName, setBtnName] = useState("LogIn");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-blue-950 shadow-lg mb-2 h-24 text-white ">
      <div className="logo-container">
        <img className="w-36 h-24 px-2 py-2 rounded-2xl " src={LOGO_URL} />
        <h1 className="app-name">Food Delivery App</h1>
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-4 font-bold">
            OnlineStatus:{onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-4 underline">
            <Link to="/" className="px-4 font-bold">
              Home
            </Link>
          </li>
          <li className="px-4 font-bold underline">
            <Link to="/about" className="link">
              About Us
            </Link>
          </li>
          <li className="px-4 font-bold underline">
            <Link to="/contact" className="link">
              Contact Us
            </Link>
          </li>
          <li className="px-4 font-bold underline">
            <Link to="/grocery" className="link">
              Grocery
            </Link>
          </li>
          <li className="px-4 font-bold underline">Cart</li>
          <button
            className="bg-blue-400 font-bold hover:bg-blue-200 hover:text-black mx-2 px-4 py-1 items-center "
            onClick={() => {
              btnName == "LogIn" ? setBtnName("Logout") : setBtnName("LogIn");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
