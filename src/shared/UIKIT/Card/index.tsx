import { cardPropType } from "./type";
import "./index.scss";
function Card({
  img,
  title,
  size = "small",
  direction = "vertical",
  children,
}: cardPropType) {
  return (
    <div
      className="card"
      style={{ flexDirection: direction === "vertical" ? "column" : "row" }}
    >
      <div className="img-container">
        <img src={img} className={`img-${size}`} alt={title} />
      </div>
      <div className="card-body">
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
}
export default Card;
