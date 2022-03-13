import { categoryPropType } from "./types";
import { data } from "./data";
import "./index.scss";
function Category({ category, setCategory }: categoryPropType) {
  return (
    <div className="category">
      <h2>Choose from your favouiate category</h2>
      <div className="category-list">
        {data.map((c) => (
          <div
            key={c.name}
            className={`category-element ${
              c.name === category ? "active" : ""
            }`}
            onClick={() => setCategory(c.name)}
          >
            <img src={c.icon} alt={c.name} />
            <p>{c.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
