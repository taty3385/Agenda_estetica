"use client";
import { Swiper, SwiperSlide  } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function Slider() {
  return (
    <Swiper slidesPerView={1} className="w-full h-96" modules={[Autoplay]} autoplay={{ delay: 6000 }}>
      <SwiperSlide>
        <img src="/Descarga cosmetologia.png" className="w-full h-80 h-full object-fill" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./Descarga cosmetologia.png" className="w-full h-80 h-full object-fill" />
      </SwiperSlide>
   
    </Swiper>
  );
}