import { useState } from "react";
import { LOGO_URL } from "../Utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
const Header = () => {
  let [btnName, setBtnName] = useState("LogIn");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
        <h1 className="app-name">Food Delivery App</h1>
      </div>

      <div className="nav-items">
        <ul>
          <li>OnlineStatus:{onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="link">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="link">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/grocery" className="link">
              Grocery
            </Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
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
