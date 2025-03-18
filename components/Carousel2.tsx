"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  { src: "/image_01.jpg", alt: "Stunning sunset over ocean waves" },
  { src: "/image_02.jpg", alt: "Majestic mountain peak at dawn" },
  { src: "/image_03.jpg", alt: "Serene forest path in autumn" },
  { src: "/image_04.jpg", alt: "Vibrant city skyline at night" },
  { src: "/image_05.jpg", alt: "Tranquil beach with palm trees" },
];

const Carousel2 = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[60vh] md:h-[75vh] lg:h-[90vh]">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 text-white text-center p-4 text-lg md:text-4xl font-semibold">
                {image.alt}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel2;
