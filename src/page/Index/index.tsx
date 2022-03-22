import { useState } from "react";
import Ellipse from "../../shared/UIKIT/Ellipse";
import CategoryList from "../../page-components/index/CategoryList";
import Restaurent from "../../page-components/index/Restaurent";
import Category from "../../shared/UIKIT/Category";
import Testimonial from "../../page-components/index/Testimonial";

import { data } from "../../page-components/index/Restaurent/data";
import "./index.scss";

function HomePage() {
  const [category, setCategory] = useState("All");
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
      <Category category={category} setCategory={setCategory} />
      <CategoryList />
      <Restaurent restaurents={data} />
      <Testimonial />
    </div>
  );
}
export default HomePage;
