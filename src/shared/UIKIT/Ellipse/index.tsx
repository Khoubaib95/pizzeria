import { elippsePropType } from "./type";
import "./index.scss";
function Ellipse({
  style = {},
  className = "",
  size = "medium",
  width = 0,
}: elippsePropType) {
  return (
    <div
      style={{ ...style, ...(width ? { width, height: width } : {}) }}
      className={`${className} ellipse ellipse-${size}`}
    ></div>
  );
}
export default Ellipse;
