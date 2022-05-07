import Grid from "../../../shared/UIKIT/Grid";
import Card from "../../../shared/UIKIT/Card";
import { PRODUCT } from "../../../const/routes";
import { data } from "./data";
import "./index.scss";

function categoryContent({ category }: { category: string | undefined }) {
  return (
    <div className="category-content">
      <h2 className="category-name">{category}</h2>
      <Grid>
        {data.map((product) => {
          const { slug, ...rest } = product;
          return (
            <Card
              size="medium"
              key={rest._id}
              slug={`${PRODUCT}${slug}`}
              {...rest}
            />
          );
        })}
      </Grid>
    </div>
  );
}

export default categoryContent;
