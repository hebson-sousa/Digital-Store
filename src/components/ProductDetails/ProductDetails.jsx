const ProductDetails = ({ children, className }) => {
  return <section className={`${className="flex items-center justify-center px-24 md:px-32"}`}>{children}</section>;
};

export default ProductDetails;