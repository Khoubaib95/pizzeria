import { useParams } from "react-router-dom";
import CategoryContent from "../../page-components/category/categoryContent";
import "./index.scss";

function CategoryPage(props: any) {
  let { category } = useParams();
  console.log(category);
  return (
    <div className="category-page">
      <CategoryContent category={category} />
    </div>
  );
}
export default CategoryPage;
