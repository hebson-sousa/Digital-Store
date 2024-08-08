import img from "../../assets/logo-header.png";

const LogoHeader = () => {
  return (
    <div className="flex gap-2">
      <img src={img} alt="Logo Header" className="h-[44px] w-[253px]" />
    </div>
  );
};

export default LogoHeader;