import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./index.scss";

function PageLayout({ children }: any) {
  return (
    <Router>
      <Header />
      <main>{children}</main>
      <Footer />
    </Router>
  );
}

export default PageLayout;
