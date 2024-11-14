import s from "./Greeting.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { GREETING_SLIDES } from "../../../../constants";
import { useContext } from "react";
import { Context } from "../../../../App";

export function Greeting() {
  const { isModalOpened, setIsModalOpened } = useContext(Context);
  return (
    <div id="greeting">
      <Swiper
        loop
        className={s.swiper}
        spaceBetween={50}
        slidesPerView={1}
        modules={[Navigation, Pagination]}
        navigation
        pagination
      >
        {GREETING_SLIDES.map((slide) => (
          <SwiperSlide key={slide.title}>
            <div className={s.slide_container}>
              <div className={s.slide_container_text}>
                <h2 className={s.slide_header}>{slide.title}</h2>
                <span className={s.slide_description}>{slide.description}</span>
              </div>
              <button
                className={s.button}
                onClick={() => setIsModalOpened(true)}
              >
                Записаться
              </button>
              <div className={s.image_slide_container}>
                <img
                  className={s.image_slide}
                  src={`${process.env.PUBLIC_URL}/${slide.img}`}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
