import { useState } from "react";
import Button from "../Header/Button";

const BuyBox = ({name, reference, pontuacao, rating, price, priceDiscount, description }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };
  return (
    <div className="buybox">
      <div className="pb-6">
        <h2 className="text-2xl font-bold mb-2 text-dark-gray">{name}</h2>
        <p className="text-gray-600 text-sm mb-4">{reference}</p>
        <div className="flex items-center pb-3 gap-5">
          <div className="flex gap-2">
            <img
              className="star"
              src="src/assets/Stars Product Option/Star 01.svg"
              alt="Star"
            />
            <img
              className="star"
              src="src/assets/Stars Product Option/Star 01.svg"
              alt="Star"
            />
            <img
              className="star"
              src="src/assets/Stars Product Option/Star 01.svg"
              alt="Star"
            />
            <img
              className="star"
              src="src/assets/Stars Product Option/Star 01.svg"
              alt="Star"
            />
            <img
              className="star"
              src="src/assets/Stars Product Option/Star 02.svg"
              alt="Star"
            />
          </div>
          <img
            className="pontuacao"
            src="src/assets/Stars Product Option/pontuacao.svg"
            alt="Pontuacao"
          />
          <span className="text-light-gray font-medium">
            {rating} (avaliações){" "}
          </span>
        </div>
        <div className="flex items-center mb-1">
          <div>
            <span className="text-gray-500 line-through text-lg">R$</span>
            <span
              className="price-original"
              style={{ textDecoration: "line-through", marginLeft: "8px" }}
            >
              {price}
            </span>
            <span
              className="text-2xl font-bold mr-2 text-dark-gray"
              style={{ marginLeft: "16px" }}
            >
              R$ {priceDiscount}
            </span>
          </div>
        </div>
        <div className="text-gray-900 font-medium text-sm mb-2 md:w-[35vw]">
          <p className="text-lg md:text-md font-bold text-light-gray">
            Tamanho
          </p>
          <div className="text-lg md:text-md font-bold mb-2 text-light-gray">
            {[39, 40, 41, 42, 43].map((size) => (
              <div
                key={size}
                className={`w-10 h-10 md:w-8 md:h-8 border rounded-md ${
                  selectedSize === size
                    ? "border-primary bg-primary text-white font-bold border-2 shadow-lg transition-all duration-200 hover:scale-110"
                    : ""
                }`}
                onClick={() => handleSizeClick(size)}
              >
                <p>{size}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-gray-900 font-medium text-sm mb-2 md:w-[35vw]">
          <p className="text-lg md:text-md font-bold text-light-gray">
            Descrição do produto
          </p>
          <p className="texto-descricao">{description}</p>
        </div>
        <div className="mb-4">
          <p className="text-lg md:text-md font-bold mb-2 text-light-gray">
            Cores
          </p>
          <div className="flex space-x-2">
            {["#6FEEFF", "#FF6969", "#5E5E5E", "#6D70B7"].map((color) => (
              <div
                key={color}
                className={`w-10 h-10 md:w-8 md:h-8 rounded-full ${
                  selectedColor === color
                    ? "border-4 border-primary shadow-lg transition-all duration-200 scale-110"
                    : ""
                }`}
                onClick={() => handleColorClick(color)}
                style={{ backgroundColor: color }}
              >
                <div></div>
              </div>
            ))}
          </div>
        </div>
        <Button
          className="w-full md:w-2/4 font-medium text-xl bg-warning hover:bg-amber-500 text-white py-3 rounded-md hover:scale-105 transition-all duration-200"
          type={"ShopButton"}
          content={"COMPRAR"}
        />
      </div>
    </div>
  );
};

export default BuyBox;