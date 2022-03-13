import HomeCard from "../HomeCard";
import { categorieData } from "./data";
import "./index.scss";

function CategoryList() {
  return (
    <div className="selected-category-list">
      {categorieData.map((category) => (
        <div className="card-container">
          <HomeCard
            img={category.img}
            title={category.title}
            stars={category.stars}
            pastPrice={category.pastPrice}
            newPrice={category.newPrice}
            time={category.time}
          />
        </div>
      ))}
    </div>
  );
}
export default CategoryList;
