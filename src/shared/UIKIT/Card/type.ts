import { ReactChild } from "react";

export type cardPropType = {
  size?: "small" | "medium" | "large";
  direction?: "horizontal" | "vertical";
  img: string;
  slug: string;
  className?: string;
  name?: string;
  description?: string | ReactChild;
  past_price?: number;
  new_price?: number;
  star?: number;
  time?: number;
  children?: any;
};
