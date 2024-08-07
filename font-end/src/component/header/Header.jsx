import { Link, NavLink } from "react-router-dom";
import { assets } from "../../../assets/assets";
import "./header.css";
import { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";

const Header = ({ setShowLogin }) => {
   const {getTotalCartAmount}=useContext(StoreContext)
  const [menu, setMenu] = useState("home");
  return (
    <header className="navber ">
      <Link to="/">
        {" "}
        <img src={assets.logo} alt="Company Logo" className="logo" />
      </Link>
      <nav>
        <ul className="nav-menu">
          <NavLink
            onClick={() => {
              setMenu("home");
            }}
            to={"/"}
            className={menu === "home" ? "isActive" : ""}
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => {
              setMenu("menu");
            }}
            to={"/menu"}
            className={menu === "menu" ? "isActive" : ""}
          >
            Menu
          </NavLink>
          <NavLink
            onClick={() => {
              setMenu("mobile-app");
            }}
            to={"/mobileApp"}
            className={menu === "mobile-app" ? "isActive" : ""}
          >
            Mobile app
          </NavLink>
          <NavLink
            onClick={() => {
              setMenu("contract-us");
            }}
            to={"/contractUs"}
            className={menu === "contract-us" ? "isActive" : ""}
          >
            Contract Us
          </NavLink>
        </ul>
      </nav>
      <div className="header-right">
        <img src={assets.search_icon} alt="Search Icon" />
        <div className="search-icon">
          <Link to="/cart">
            {" "}
            <img src={assets.basket_icon} alt="Basket Icon" />
          </Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)} className="btn">
          SignIn
        </button>
      </div>
    </header>
  );
};  

export default Header;
