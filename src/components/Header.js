import { useState } from "react";
import LogoImage from "../../assets/images/fast-food-logo.png";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");


  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LogoImage} alt="Company Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Cart</li>
          <li>About Us</li>
          <li>Contct Us</li>
          <li>
            <button className="btn-login" onClick={() => {
              setBtnName(btnName == "Logout" ? "Login" : "Logout");
            }}>{ btnName }</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
