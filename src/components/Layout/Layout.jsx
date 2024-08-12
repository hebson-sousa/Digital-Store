import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({children}) => {
  return (
    <div className="flex flex-col min-h-screen bg-white2">
        <Header />
        {children}
        <Footer />
      </div>
  );
};

export default Layout;