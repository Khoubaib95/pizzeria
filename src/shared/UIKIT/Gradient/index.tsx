import { createElement } from "react";
import { GradientPropType } from "./types";
import "./index.scss";

function Gradient({
  children,
  style,
  className,
  element = "div",
  ...other
}: GradientPropType) {
  return createElement(
    element,
    { className: `${className} gradient`, style, ...other },
    children
  );
}

export default Gradient;
