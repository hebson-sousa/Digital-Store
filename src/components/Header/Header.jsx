import LogoHeader from "../Logo/LogoHeader";
import logoHeader from "../../assets/logo-header.svg";
import Search from "./Search";
import Button from "./Button";
import { LuShoppingCart } from "react-icons/lu";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="bg-white shadow-md px-24 py-10 gap-8 justify-around md:px-32">
      <section className="flex mx-auto items-center gap-10">
        <div className="flex flex-1 items-center justify-center gap-8">
          <LogoHeader img={logoHeader} alt="Logo Header" />
          <Search />
        </div>
        <div className="flex items-center justify-center gap-8 p-2 w-auto h-[60px]">
          <Button
            label="Cadastre-se"
            className="bg-none font-normal w-28 h-10 text-darkGray2 hover:text-primary ease-in transition-all duration-300"
          />
          <Button
            label="Entrar"
            className="bg-primary font-bold w-28 h-10 text-white hover:bg-tertiary ease-in transition-all duration-300"
          />
          <LuShoppingCart
            size={20}
            className="cursor-pointer text-primary hover:text-tertiary ease-in transition-all duration-300"
          />
        </div>
      </section>
      <div className="flex">
        <NavBar title="Home" page="/" className="mr-4" />
        <NavBar title="Produtos" page="/produtos" className="mx-4" />
        <NavBar title="Categorias" page="/Home" className="mx-4" />
        <NavBar title="Meus Pedidos" page="/Home" className="ml-4" />
      </div>
    </header>
  );
};

export default Header;