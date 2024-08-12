import { useEffect, useState } from "react";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import { Link } from "react-router-dom";
import Gallery from "../../components/Gallery/Gallery";
import BuyBox from "../../components/BuyBox/BuyBox";
import Section from "../../components/Section/Section";
import ProductListPage from "../../components/ProductListing/ProductListPage";

const ProductViewPage = () => {
  const { products, productDetails } =
    useState()
  const [relatedProducts, setRelatedProducts] = useState([])

  useEffect(() => {
    if (productDetails && products.length > 0) {
      const filteredProducts = products
        .filter((product) => product.brand === productDetails.brand)
        .sort(() => 0.5 - Math.random())
        .slice(0, 4)
      setRelatedProducts(filteredProducts)
    }
  }, [productDetails, products])

  return (
    <ProductDetails>
      <div className="flex flex-col items-center w-full">
        <div className="py-7 w-full">
          <Link to="/produtos">
            <h3 className="font-normal text-darkGray2">
              Home / Produtos / Tênis / Nike / Tênis Nike Revolution 6 Next Nature Masculino
            </h3>
          </Link>
        </div>
        <div className="flex gap-20 w-full">
          <div className="w-full md:max-w-2xl">
            <Gallery />
          </div>
          <div className="w-full md:max-w-2xl">
              <BuyBox
              />
          </div>
        </div>
        <Section
        title="Produtos Relacionados"
            titleAlign="text-left"
            className="flex gap-5 "
            button={true}
            href={`/produtos?filter=${productDetails?.brand}`}
          >
            {relatedProducts.length > 0 &&
              relatedProducts.map((product, index) => (
                <Link to={`/produtos/${product.slug}`} key={index}>
                </Link>
              ))}
        <ProductListPage />
      </Section>
      </div>
    </ProductDetails>
  );
};

export default ProductViewPage;