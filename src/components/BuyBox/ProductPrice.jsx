const ProductPrice = ({ originalPrice, discountedPrice }) => {
  return (
    <div>
      <div className="flex items-end mt-4">
        <span className="text-base font-semibold text-zinc-700">
          R${""}
          <span className="text-4xl">
            {discountedPrice},<span className="text-2xl">00</span>
          </span>
        </span>
        {originalPrice && (
          <span className="line-through ml-2 text-gray-500">
            {originalPrice},00
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductPrice;