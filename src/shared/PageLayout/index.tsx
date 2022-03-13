import Header from "./Header";
import Footer from "./Footer";
import "./index.scss";
function PageLayout({ children }: any) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default PageLayout;
