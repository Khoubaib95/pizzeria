import { NavLink } from "react-router-dom";
import Gradient from "../Gradient";
import { cardPropType } from "./type";
import Clock from "../../../assets/icons/clock.svg";
import Star from "../../../assets/icons/star.svg";
import "./index.scss";

function Card({
  size = "small",
  direction = "vertical",
  className,
  img,
  name,
  slug,
  past_price,
  new_price,
  description,
  star,
  time,
  children,
}: cardPropType) {
  return (
    <Gradient
      className={`${className ? className : ""} card`}
      style={{ flexDirection: direction === "vertical" ? "column" : "row" }}
    >
      <div className="img-container">
        <NavLink className="link" to={slug}>
          <img src={img} className={`img-${size}`} alt={name} />
        </NavLink>
      </div>
      <div
        className="card-body"
        style={{ ...(direction === "vertical" ? {} : { marginLeft: 15 }) }}
      >
        <h2>
          <NavLink className="link" to={slug}>
            {name}
          </NavLink>
        </h2>
        {description ? <span>{description}</span> : <></>}
        {new_price ? (
          <div className="price">
            {new_price ? <span className="new">{`$${new_price}`}</span> : <></>}
            <span className="past">{`$${past_price}`}</span>
          </div>
        ) : (
          <></>
        )}
        {star ? (
          <div className="footer">
            <div className="stars">
              {[1, 2, 3, 4, 5].map((s) => (
                <img src={Star} alt="star" key={s} />
              ))}
            </div>
            {time ? (
              <div className="time">
                <img src={Clock} alt="clock" /> <span>{time} mins</span>
              </div>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <></>
        )}
        {children}
      </div>
    </Gradient>
  );
}
export default Card;
