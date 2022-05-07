import RestaurentHeader from "../../page-components/Restaurent/Header";
import RestaurentInfo from "../../page-components/Restaurent/Info";
import "./index.scss";

function RestaurantPage() {
  return (
    <div className="restaurant-page">
      <RestaurentHeader />
      <RestaurentInfo />
    </div>
  );
}
export default RestaurantPage;
