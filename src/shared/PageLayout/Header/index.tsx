import Input from "../../UIKIT/Input";
import "./index.scss";
import logo from "../../../assets/icons/logo.svg";
import loop from "../../../assets/icons/loop.svg";
import shop from "../../../assets/icons/shop.svg";
function Header() {
  return (
    <header>
      <nav>
        <img id="brand-icon" src={logo} alt="logo" />

        <Input
          rooteClassName="search-container"
          icon={loop}
          placeholder="Search here..."
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />

        <div id="nav">
          <span className="nav-link">Home</span>
          <span className="nav-link">Restaurants</span>
          <span className="nav-link">About Us</span>
        </div>
        <div id="nav-user">
          <img id="shop-cart-icon" src={shop} alt="shop-cart" />
          <div
            id="user-cart-icon"
            style={{ background: 'url("/images/user.png"), #C4C4C4' }}
          ></div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
