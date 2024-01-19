import { useContext, useState } from "react";
import LogoImage from "../../assets/images/fast-food-logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const { loggedInUser } = useContext(UserContext);

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between items-center bg-pink-100 p-5 shadow-lg sm:bg-yellow-100 md:bg-blue-100 lg:bg-green-100">
      <div className="logo-container">
        <img className="w-20" src={LogoImage} alt="Company Logo" />
      </div>
      <div className="nav-items">
        <ul className="flex">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4 hover:text-rose-600">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hover:text-rose-600">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="px-4 hover:text-rose-600">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 hover:text-rose-600">
            <Link to="/contact">Contct Us</Link>
          </li>
          <li className="px-4 hover:text-rose-600">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold">
            { loggedInUser }
          </li>
          <li className="px-4 hover:text-rose-600">
            <button
              className="btn-login"
              onClick={() => {
                setBtnName(btnName == "Logout" ? "Login" : "Logout");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
