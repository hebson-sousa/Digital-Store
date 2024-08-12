import ProductCard from "../ProductCard/ProductCard";
import img from "../../assets/k-swiss.png";

const ProductListPage = () => {
  return (
    <section className="grid grid-cols-4 gap-5">
      <ProductCard
        type="Tênis"
        title="K-Swiss V8 - Masculino"
        discount={30}
        price={200}
        priceDiscount={100}
        image={img}
      />
      <ProductCard
        type="Tênis"
        title="K-Swiss V8 - Masculino"
        discount={30}
        price={200}
        priceDiscount={100}
        image={img}
      />
      <ProductCard
        type="Tênis"
        title="K-Swiss V8 - Masculino"
        price={200}
        priceDiscount={100}
        image={img}
      />
      <ProductCard
        type="Tênis"
        title="K-Swiss V8 - Masculino"
        price={200}
        priceDiscount={100}
        image={img}
      />
    </section>
  );
};

export default ProductListPage;