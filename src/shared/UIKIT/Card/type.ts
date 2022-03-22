export type cardPropType = {
  img: string;
  link:string;
  className?: string;
  title?: string;
  size?: "small" | "medium" | "large";
  direction?: "horizontal" | "vertical";
  children?: any;
};
