import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({children}) => {
  return (
    <div className="flex flex-col bg-white2">
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;