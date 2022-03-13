import React from "react";
import PageLayout from "./shared/PageLayout";
import HomePage from "./page";
import logo from "./assets/icons/close.svg";
import logo1 from "./assets/icons/mastercard.svg";
//import logo2 from "./assets/icons/visa.svg";
import "./App.scss";

function App() {
  return (
    <PageLayout>
      <HomePage />
    </PageLayout>
  );
}

export default App;
