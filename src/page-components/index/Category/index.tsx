import { NavLink } from "react-router-dom";
import { CATEGORY } from "../../../const/routes";
import { data } from "./data";
import "./index.scss";

function Category() {
  return (
    <div className="category">
      <h2>Choose from your favouiate category</h2>
      <div className="category-list">
        {data.map((c) => (
          <NavLink to={`${CATEGORY}${c.link}`} key={c.name}>
            <div className="category-element">
              <img src={c.icon} alt={c.name} />
              <p>{c.name}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Category;
