import Section from "../Section/Section";
import ProductCard from "../ProductCard/ProductCard"
import img from "../../assets/k-swiss.png"

const Productlisting = () => {
  return ( 
    <div className="flex items-center justify-center px-24 py-10 md:px-32">
      <Section
      title="Produtos em alta"
      titleAlign="text-left"
      className="grid grid-cols-4 gap-5"
      button={true}
      >
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
      </Section>
    </div>
   );
}
 
export default Productlisting;