//import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import PageLayout from "./shared/PageLayout";
import Profile from "./shared/ProfileLayout";
import HomePage from "./page/Index";
import RestaurantsPage from "./page/Restaurants";
import RestaurantPage from "./page/Restaurant";
import CategoryPage from "./page/Category";
import ProductPage from "./page/Product";
import ShoppingPage from "./page/Shopping";
import AboutPage from "./page/About";
import {
  HOME,
  RESTAURENTS,
  ABOUT_US,
  CATEGORY_PATH,
  ME,
  RESTAURENT_PATH,
  PRODUCT_PATH,
  CART,
} from "./const/routes";
import "./App.scss";
//const HomePage = lazy(() => import("./page/Index"));

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path={HOME.link} element={<HomePage />} />
        <Route path={RESTAURENTS.link} element={<RestaurantsPage />} />
        <Route path={RESTAURENT_PATH} element={<RestaurantPage />} />
        <Route path={PRODUCT_PATH} element={<ProductPage />} />
        <Route path={CATEGORY_PATH} element={<CategoryPage />} />
        <Route path={CART} element={<ShoppingPage />} />
        <Route path={ABOUT_US.link} element={<AboutPage />} />
        <Route path={ME} element={<Profile />} />
      </Routes>
    </PageLayout>
  );
}

export default App;
