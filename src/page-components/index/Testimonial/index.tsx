import { data } from "./data";
import TestimonialCard from "../../../shared/UIKIT/TestimonialCard";
import Ellipse from "../../../shared/UIKIT/Ellipse";
import "./index.scss";

function Testimonial({ testimonials }: any) {
  return (
    <section id="testimonial">
      {testimonials === null ? (
        "loading..."
      ) : (
        <>
          <h2>What Our Customers Say About Us</h2>
          <div className="testimonial-list-wrapper">
            {testimonials.map((t: any, i: number) => (
              <TestimonialCard key={i} {...t} isActive={i === 1} />
            ))}
          </div>
          <Ellipse style={{ left: 279.95, top: 50 }} />
          <Ellipse size="large" style={{ top: -100, right: -100 }} />
        </>
      )}
    </section>
  );
}
export default Testimonial;
