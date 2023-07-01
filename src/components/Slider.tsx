import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "./Button";

function Slider() {
  function handleClickTraiNghiem() {
    return console.log('first')
  }
  return (
    <section className="relative">
      <div className="absolute top-0 left-0 h-full w-full">
        <div className="container mx-auto relative h-full">
          <div className="absolute z-10 top-1/2 -translate-y-1/2 max-w-xl">
            <h1 className="text-[68px] font-extrabold text-white mb-8">Sacombank Pay</h1>
            <h2 className="text-3xl font-extrabold text-white mb-8">Ứng dụng quản lý tài chính
              mang đến cho bạn trải nghiệm tuyệt vời</h2>
            <Button title="Trải nghiệm ngay" onClick={handleClickTraiNghiem} />
          </div>
        </div>
      </div>
      <Swiper
        effect={"fade"}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper h-[672px] "
      >
        <SwiperSlide className="object-cover bg-center">
          <img src="/images/banner-1.png" />
        </SwiperSlide>
        <SwiperSlide className="object-cover bg-center">
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide className="object-cover bg-center">
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide className="object-cover bg-center">
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Slider