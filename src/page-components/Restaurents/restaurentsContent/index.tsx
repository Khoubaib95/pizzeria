import Grid from "../../../shared/UIKIT/Grid";
import Card from "../../../shared/UIKIT/Card";
import { data } from "./data";
import { RESTAURENT } from "../../../const/routes";

import "./index.scss";

function RestaurentsContent() {
  return (
    <div className="restaurents-content">
      <Grid>
        {data.map((restaurent) => {
          const { slug, ...rest } = restaurent;
          return (
            <Card
              size="medium"
              key={rest._id}
              slug={`${RESTAURENT}${slug}`}
              {...rest}
            />
          );
        })}
      </Grid>
    </div>
  );
}

export default RestaurentsContent;
