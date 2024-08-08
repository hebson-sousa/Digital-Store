import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import HomePage from "../pages/HomePage/HomePage";
import ProductListingPage from "../pages/ProductListingPage/ProductListingPage";

const Paths = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout> <HomePage /> </Layout>} />
        <Route path="/Produtos" element={<Layout> <ProductListingPage /> </Layout>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Paths;