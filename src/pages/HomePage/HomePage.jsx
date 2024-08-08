import ProductListing from "../../components/ProductListing/ProductListing";
import Collection from "../../components/Section/Collection";
import Hero from "../../components/Section/Hero";
import ProductEdition from "../../components/Section/ProductEdition";

const HomePage = () => {
    return ( 
        <main>
            <Hero />
            <Collection />
            <ProductListing />
            <ProductEdition />
        </main>
     );
}
 
export default HomePage;