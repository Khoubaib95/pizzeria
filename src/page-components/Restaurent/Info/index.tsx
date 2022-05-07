import OUTLINE_STAR_ICON from "../../../assets/icons/outline-star.svg";
import "./index.scss";

function RestaurentInfo() {
  return (
    <div className="restaurent-info">
      <div className="restaurent-info-header">
        <h1>Mindels Burger and Fries</h1>
        <div className="review">
          <div className="badge">
            <span>3.6</span>
            <img src={OUTLINE_STAR_ICON} alt="" />
          </div>
          <span className="reviews">69 Reviews</span>
        </div>
      </div>
      <p>Burger, Fastfood, Bevrages</p>
      <p>Austin, Texas</p>
    </div>
  );
}

export default RestaurentInfo;
