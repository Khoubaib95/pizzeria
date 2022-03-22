import { NavLink } from "react-router-dom";
import Gradient from "../Gradient";
import { cardPropType } from "./type";
import "./index.scss";

function Card({
  img,
  title,
  link,
  className,
  size = "small",
  direction = "vertical",
  children,
}: cardPropType) {
  return (
    <Gradient
      className={`${className ? className : ""} card`}
      style={{ flexDirection: direction === "vertical" ? "column" : "row" }}
    >
      <div className="img-container">
        <NavLink className="link" to={link}>
          <img src={img} className={`img-${size}`} alt={title} />
        </NavLink>
      </div>
      <div className="card-body">
        <h2>
          <NavLink className="link" to={link}>
            {title}
          </NavLink>
        </h2>
        {children}
      </div>
    </Gradient>
  );
}
export default Card;
