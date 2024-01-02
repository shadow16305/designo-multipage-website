import Footer from "./MainNavigation/Footer";
import Navbar from "./MainNavigation/Navbar";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <main className="md:max-w-[calc(689px+32px)] lg:max-w-[calc(1240px+32px)] mx-auto lg:px-4">
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
