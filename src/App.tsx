//import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import PageLayout from "./shared/PageLayout";
import Profile from "./shared/ProfileLayout";
import HomePage from "./page/Index";
import RestaurantsPage from "./page/Restaurants";
import AboutPage from "./page/About";
import {
  HOME,
  RESTAURENTS,
  ABOUT_US,
  PROFILES,
  ORDER_HISTORY,
  MY_ADRESSES,
  ME,
} from "./const";
import "./App.scss";
//const HomePage = lazy(() => import("./page/Index"));

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path={HOME.link} element={<HomePage />} />
        <Route path={RESTAURENTS.link} element={<RestaurantsPage />} />
        <Route path={ABOUT_US.link} element={<AboutPage />} />
        <Route path={ME} element={<Profile />} />
      </Routes>
    </PageLayout>
  );
}

export default App;

{
  /*
        <Routes>
          <Route path="/">
            <Suspense fallback={"..."}>
              <p>hoooooooooooooo</p>
            </Suspense>
          </Route>
          <Route>hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</Route>
        </Routes>
      </PageLayout>*/
}
