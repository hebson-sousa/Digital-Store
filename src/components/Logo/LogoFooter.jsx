import img from "../../assets/logo-footer.png";

const LogoFooter = () => {
  return (
    <div className="flex gap-2">
      <img src={img} alt="Logo Footer" className="h-[44px] w-[253px]" />
    </div>
  );
};

export default LogoFooter;