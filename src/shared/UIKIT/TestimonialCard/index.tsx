import Gradient from "../Gradient";
import { TestimonialCardPropType } from "./types";
import "./index.scss";

function TestimonialCard({
  img,
  user,
  text,
  isActive = false,
}: TestimonialCardPropType & { isActive?: boolean }) {
  return (
    <Gradient
      className={`testimonial ${
        isActive ? "active-testimonial-card" : "testimonial-card"
      }`}
    >
      <img src={img} alt={user} />
      <p>{text}</p>
      <span>{user}</span>
    </Gradient>
  );
}
export default TestimonialCard;
