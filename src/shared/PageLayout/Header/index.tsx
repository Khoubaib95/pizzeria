import { NavLink } from "react-router-dom";
import { HOME, RESTAURENTS, ABOUT_US, PROFILES } from "../../../const";
import Input from "../../UIKIT/Input";
import LOGO_ICON from "../../../assets/icons/logo.svg";
import LOOP_ICON from "../../../assets/icons/loop.svg";
import SHOP_ICON from "../../../assets/icons/shop.svg";
import "./index.scss";

function Header() {
  return (
    <header>
      <nav>
        <img id="brand-icon" src={LOGO_ICON} alt="logo" />

        <Input
          rooteClassName="search-container"
          icon={LOOP_ICON}
          placeholder="Search here..."
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />

        <div id="nav">
          <NavLink
            className={({ isActive }) =>
              isActive ? "link active-link" : "link"
            }
            to={HOME.link}
          >
            {HOME.label}
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "link active-link" : "link"
            }
            to={RESTAURENTS.link}
          >
            {RESTAURENTS.label}
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "link active-link" : "link"
            }
            to={ABOUT_US.link}
          >
            {ABOUT_US.label}
          </NavLink>
        </div>
        <div id="nav-user">
          <img id="shop-cart-icon" src={SHOP_ICON} alt="shop-cart" />
          <NavLink to={PROFILES.link}>
            <div
              id="user-cart-icon"
              style={{ background: 'url("/images/user.png"), #C4C4C4' }}
            ></div>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
