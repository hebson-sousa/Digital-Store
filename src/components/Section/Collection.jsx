import { PiBaseballCapLight, PiHeadphonesLight, PiPantsLight, PiSneakerLight, PiTShirtLight } from "react-icons/pi";
import Section from "./Section";
import dropStarWars from "../../assets/star-wars.png";
import dropTenis from "../../assets/tenis.png";
import dropHeadphones from "../../assets/headphones.png";
import Hot from "../ProductCard/Hot";
import Class from "../ProductCard/Class";


const Collection = () => {
  return (
    <div className="flex flex-col items-center justify-center px-24 py-10 md:px-32">
      <Section
        title="Coleções em destaque"
        titleAlign="text-left"
        className="flex gap-4"
      >
        <Hot
          title="Novo drop Supreme"
          discount={30}
          image={{
            src: dropStarWars,
            alt: "Drop Supreme",
          }}
        />
        <Hot
          title="Coleção Adidas"
          discount={30}
          image={{
            src: dropTenis,
            alt: "Drop Adidas",
          }}
        />
        <Hot
          title="Novo Beats Bass"
          discount={30}
          image={{
            src: dropHeadphones,
            alt: "Drop Bass",
          }}
        />
      </Section>
      <Section
        title="Coleções em destaque"
        titleAlign="text-center"
        className="flex gap-4"
      >
        <Class title="Camisetas" icon={PiTShirtLight} />
        <Class title="Calças" icon={PiPantsLight} />
        <Class title="Bonés" icon={PiBaseballCapLight} />
        <Class title="Headphones" icon={PiHeadphonesLight} />
        <Class title="Tênis" icon={PiSneakerLight} />
      </Section>
    </div>
  );
};

export default Collection;