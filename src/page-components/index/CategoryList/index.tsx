import HomeCard from "../HomeCard";
import { categorieData } from "./data";
import "./index.scss";

function CategoryList() {
  return (
    <div className="selected-category-list">
      {categorieData.map((category) => (
        <HomeCard
          key={category.slug}
          img={category.img}
          title={category.title}
          link={category.slug}
          stars={category.stars}
          pastPrice={category.pastPrice}
          newPrice={category.newPrice}
          time={category.time}
        />
      ))}
    </div>
  );
}
export default CategoryList;
