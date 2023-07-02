import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SLIDERIMG } from "../constants";

function Slider() {
  return (
    <section className="relative overflow-hidden">
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
        className="mySwiper h-full max-h-[200px] md:max-h-[320px] lg:max-h-[660px]"
      >
        {SLIDERIMG.map((item, index) => (
          <SwiperSlide key={index} className="object-cover bg-center">
            <img src={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Slider