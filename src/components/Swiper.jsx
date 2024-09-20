import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Car from "../assets/car.webp";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import '../../src/index.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

function SwiperSection() {
  const products = [
    {
      id: "1",
      img: Car,
    },
    {
      id: "2",
      img: Car,
    },
    {
      id: "3",
      img: Car,
    },
    {
      id: "4",
      img: Car,
    },
    {
      id: "5",
      img: Car,
    },
    {
      id: "6",
      img: Car,
    },
  ];
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Return null on server-side render
  }
  return (
    <>
      <div>
        <Swiper
          modules={[Navigation, Pagination, Mousewheel, Keyboard]} // Import Swiper modules
          spaceBetween={50}
          slidesPerView={1}
          mousewheel={true}
          keyboard={true}
          navigation // Enable navigation (arrows)
          pagination={{ clickable: true }} // Enable pagination (dots)
        >
          {products.map((product) => (
            <div key={product.id}>
              <SwiperSlide>
                <img src={product.img} alt="slider_img" />
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
        <div className=" lg:flex justify-between items-center hidden  gap-6 mt-4">
          {products.slice(0,3).map((product) => (
            <div key={product.id}>
              <img src={product.img} width={300} height={50} alt="slider_img" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SwiperSection;
