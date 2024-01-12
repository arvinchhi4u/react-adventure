import LogoImage from "../../assets/images/fast-food-logo.png";

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
