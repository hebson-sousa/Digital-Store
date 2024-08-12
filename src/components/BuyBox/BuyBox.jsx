import { useState } from "react";
import ProductOptions from "../ProductOptions/ProductOptions";
import Button from "../Header/Button";
import ProductPrice from "./ProductPrice";

const BuyBox = ({ name, category, brand, gender }) => {
  const [selectedSize, selectedColor, setSelectedColor] = useState(null);

  const handleSize = (size= String) => {
    setSelectedSize(size)
  }

  const sizes = ["39", "40", "41", "42", "43"];

  const colors = [
    { id: 1, color: "bg-cyan-500" },
    { id: 2, color: "bg-red-500" },
    { id: 3, color: "bg-darkGray2" },
    { id: 4, color: "bg-purple-500" },
  ];

  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-[2rem] font-bold text-darkGray w-3/4">
        {(name = "Tênis Nike Revolution 6 Next Nature Masculino")}
      </h1>
      <h2 className="text-[1rem] font-medium text-darkGray3 my-3">
        {(category = "Casual")} &#124; {(brand = "Nike")} &#124;{" "}
        {(gender = "REF: DD84769111")}
      </h2>
      <div className="flex items-center text-[1.2rem]">
        <ProductPrice discountedPrice={219} originalPrice={219} />
      </div>
      <ProductOptions label="Descrição do produto">
        <p className="flex text-darkGray2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco.
        </p>
      </ProductOptions>
      <ProductOptions label="Tamanho" className="gap-2">
        {sizes?.map((size) => (
          <button
            key={size}
            onClick={() => handleSize(size)}
            className={`flex items-center justify-center border border-lightGray2 rounded w-12 h-12 cursor-pointer text-darkGray2 text-[1rem] font-bold ease-in transition-all duration-300 ${
              selectedSize === size
                ? "bg-primary text-white border-none"
                : "hover:bg-primary hover:text-white hover:border-none"
            }`}
          >
            {size}
          </button>
        ))}
      </ProductOptions>
      <ProductOptions label="Cores">
        <div className="mb-4">
          <div className="flex space-x-2">
            {colors.map((color) => (
              <button
                key={color.id}
                className={`w-10 h-10 md:w-8 md:h-8 rounded-full ${
                  color.color
                } ${
                  selectedColor === color.color
                    ? "border-4 border-primary shadow-lg transition-all duration-200 scale-110"
                    : ""
                }`}
                onClick={() => setSelectedColor(color.color)}
              ></button>
            ))}
          </div>
        </div>
      </ProductOptions>
      <Button
        label="Comprar"
        className="bg-warning font-bold w-52 h-12 text-white text-[1.2rem]"
      />
    </div>
  );
};

export default BuyBox;