import Edition from "./Edition";
import img from "../../assets/air-jordan.png";

const ProductEdition = () => {
  return (
    <section className="flex items-center justify-between px-24 pt-24 bg-white md:px-32">
      <div className="flex w-1/2">
        <img src={img} alt="Oferta especial" />
      </div>
      <Edition
        title={{
          label: "Air Jordan edição de colecionador",
          style: "text-darkGray2",
        }}
        subtitle={{
          label: "Oferta especial",
          style: "text-primary",
        }}
        description={{
          label:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
          style: "w-[590px]",
        }}
        button={{
          label: "Ver Ofertas",
          style:
            "bg-primary font-bold w-48 h-10 text-white hover:bg-tertiary ease-in transition-all duration-300",
        }}
        className="flex flex-col w-1/2 h-80"
      />
    </section>
  );
};

export default ProductEdition;