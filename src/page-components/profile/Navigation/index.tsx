import { NavLink } from "react-router-dom";
import { PROFILES, ORDER_HISTORY, MY_ADRESSES } from "../../../const/routes";
import Gradient from "../../../shared/UIKIT/Gradient";
import "./index.scss";

function Navigation() {
  return (
    <Gradient className="profile-nav" element="nav">
      <NavLink
        className={({ isActive }) => (isActive ? "link active-link" : "link")}
        to={PROFILES.link}
      >
        {PROFILES.label}
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "link active-link" : "link")}
        to={ORDER_HISTORY.link}
      >
        {ORDER_HISTORY.label}
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "link active-link" : "link")}
        to={MY_ADRESSES.link}
      >
        {MY_ADRESSES.label}
      </NavLink>
    </Gradient>
  );
}
export default Navigation;
