import { motion } from "framer-motion";
import Discount from "./Discount";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ type, title, price, discount, priceDiscount, session, image }) => {
  const navigate = useNavigate();

    const handleClick = () => {
        window.scrollTo(0, 0);
        navigate("/produtos/*");
    }

  return (
    <motion.div onClick={handleClick}
      className="flex flex-col items-center justify-center mb-10 cursor-pointer "
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.9 }}
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <div className="w-72 h-80 rounded bg-white">
        <div className="p-4 z-10 relative max-w-44">
          {discount ? (
            <Discount discountOffer={discount} />
          ) : (
            <div className="mb-4 w-24 h-8"></div>
          )}
        </div>
        <div className="flex items-center justify-center relative -top-3 -left-3">
          <img
            src={image}
            alt={title}
          />
        </div>
      </div>
      <div className="flex flex-col gap-1 pt-3">
        <div className="flex gap-1">
          <h2 className="text-lightGray font-bold text-[12px] w-9 h-6">
            {type}
          </h2>
          <h2 className="text-primary font-bold text-[12px] w-9 h-6">
            {session}
          </h2>
        </div>
        <h1 className="text-darkGray2 font-normal text-[1.4rem] w-72 h-20">
          {title}
        </h1>
        <div className="flex items-center">
            <div className="flex items-center justify-center">
              <span className="text-lightGray line-through font-normal text-[24px] w-16 h-10">
                ${(price)}
              </span>
              <span className="text-darkGray font-bold text-[24px] w-16 h-10">
                ${(priceDiscount)}
              </span>
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;