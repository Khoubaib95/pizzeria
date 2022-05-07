import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import UserInfo from "../../page-components/profile/UserInfo";
import HistoryProductCard from "../../page-components/profile/HistoryProductCard";
import { PROFILES, ORDER_HISTORY, MY_ADRESSES } from "../../const/routes";
import "./index.scss";

function ProfileLayout() {
  return (
    <div className="profile-layout">
      <Navigation />
      <Routes>
        <Route path={PROFILES.link} element={<UserInfo />} />
        <Route path={MY_ADRESSES.link} element={<span>adresses</span>} />
        <Route path={ORDER_HISTORY.link} element={<HistoryProductCard />} />
      </Routes>
    </div>
  );
}
export default ProfileLayout;
