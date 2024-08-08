import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import Banner from "./Banner";
import sneaker from "../../assets/sneaker.png";

const Hero = () => {
  const images = [sneaker, sneaker, sneaker, sneaker];
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: true,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Banner image={image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;