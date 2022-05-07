export type productType = {
  _id: string;
  img: string;
  name: string;
  description?: string;
  slug: string;
  star: number;
  past_price: number;
  new_price: number;
  time: number;
};
export type homeRestaurentPropType = {
  _id: string;
  img: string;
  link: string;
  name: string;
  stars: number;
  price: number;
  text: string;
  time: number;
};
