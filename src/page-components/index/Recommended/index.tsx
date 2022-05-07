import { useState, useEffect } from "react";
import { productType } from "../../../@types";
import Grid from "../../../shared/UIKIT/Grid";
import Card from "../../../shared/UIKIT/Card";
import { PRODUCT } from "../../../const/routes";
import "./index.scss";

function Recommended({ products }: any) {
  return (
    <Grid className="recommended-list col-4">
      {products === null
        ? "loading..."
        : products?.map((product: productType) => {
            const { slug, ...rest } = product;
            return (
              <Card key={product.slug} slug={`${PRODUCT}${slug}`} {...rest} />
            );
          })}
    </Grid>
  );
}
export default Recommended;
