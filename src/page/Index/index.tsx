import { useState, useEffect } from "react";
import { productType, homeRestaurentPropType } from "../../@types";
import {
  getRecomendedProducts,
  getNearRestaurents,
  getTestimonials,
} from "../../api/index";
import Ellipse from "../../shared/UIKIT/Ellipse";
import Recommended from "../../page-components/index/Recommended";
import Restaurent from "../../page-components/index/Restaurent";
import Category from "../../page-components/index/Category";
import Testimonial from "../../page-components/index/Testimonial";
import { data } from "../../page-components/index/Restaurent/data";
import "./index.scss";

function HomePage() {
  const [products, setProducts] = useState<productType[] | null>(null);
  const [nearRestaurents, setNearRestaurents] = useState<
    homeRestaurentPropType[] | null
  >(null);
  const [testimonials, setTestimonials] = useState<any[] | null>(null);
  useEffect(() => {
    (async () => {
      try {
        if (!products && !nearRestaurents && !testimonials) {
          const [products, nearRestaurents, testimonials] = await Promise.all([
            getRecomendedProducts(),
            getNearRestaurents(),
            getTestimonials(),
          ]);
          setProducts(products.data);
          setNearRestaurents(nearRestaurents.data);
          setTestimonials(testimonials.data);
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
  return (
    <div className="home-page">
      <Ellipse size="large" style={{ top: -100, right: -100 }} />
      <div id="top-content">
        <div id="left">
          <h1>GET DELICIOUS FOOD AT YOUR DOORSTEPS</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            elementum diam lacus, magnis. Diam tempus lorem laoreet mattis orci
            sagittis velit. Amet scelerisque diam non quis amet adipiscing.
          </p>
          <button>Order Now</button>
        </div>
        <div id="right">
          <div className="right-card">
            <img src="/images/main-burger.png" alt="Burger" />
          </div>
          <Ellipse style={{ left: -125, bottom: -75 }} />
        </div>
      </div>
      <Category />
      <Recommended products={products} />
      <Restaurent restaurents={nearRestaurents} />
      <Testimonial testimonials={testimonials} />
    </div>
  );
}
export default HomePage;
