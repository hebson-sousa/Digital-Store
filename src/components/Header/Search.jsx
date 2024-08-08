import { LuSearch } from "react-icons/lu";

const Search = () => {
  return (
    <form className="relative w-full md:flex-1">
      <input
        id="search"
        type="text"
        placeholder="Pesquisar produtos..."
        className="font-normal text-[1rem] p-2 pl-5 w-full h-[60px] outline-none rounded-[8px] text-darkGray2 bg-lightGray3 md:flex-1"
      />
      <button
        type="submit"
        className="absolute right-1 top-1/2 -translate-y-1/2 p-2"
      >
        <LuSearch size={20} className="text-darkGray3" />
      </button>
    </form>
  );
};

export default Search;