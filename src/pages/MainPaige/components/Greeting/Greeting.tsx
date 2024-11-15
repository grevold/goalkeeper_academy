import s from "./Greeting.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { GREETING_SLIDES } from "../../../../constants";
import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../../../App";
import { CircularProgress } from "@mui/material";

export function Greeting() {
  const { isModalOpened, setIsModalOpened } = useContext(Context);
  const [isLoadedVideo, setIsLoadedVideo] = useState(false);

  return (
    <div id="greeting">
      <Swiper
        autoplay
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
                <video
                  className={isLoadedVideo ? s.video : s.video_disable}
                  autoPlay
                  muted
                  loop
                  onPlay={() => setIsLoadedVideo(true)}
                >
                  <source
                    src={`${process.env.PUBLIC_URL}/${slide.video}`}
                    type="video/mp4"
                  />
                </video>
                <img
                  src={`${process.env.PUBLIC_URL}/${slide.preview}`}
                  className={s.preview}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

{
  /* <img
                      className={s.image_slide}
                      src={`${process.env.PUBLIC_URL}/${slide.preview}`}
                    /> */
}
