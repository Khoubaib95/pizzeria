import { get } from "./api";

export const getNearRestaurents = async () => {
  return await get("restaurant");
};

export const getRecomendedProducts = async () => {
  return await get("product");
};
export const getTestimonials = async () => {
  return await get("testimonial");
};
