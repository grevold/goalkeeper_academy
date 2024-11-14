import { useState } from "react";
import { Progress } from "../Progress/Progress";
import s from "./TrainingsDesktop.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { TRAININGS_SLIDES } from "../../../../../../constants";
import { ButtonMain } from "../../../../../../components/ButtonMain/ButtonMain";

export function TrainingsDesktop() {
  const [statusProgress, setStatusProgress] = useState(1);
  return (
    <div className={s.root} id="trainings">
      <h2 className={s.header}>Наша формула успеха вратарей-воспитанников</h2>
      <Progress status={statusProgress} />
      <Swiper
        className={s.swiper}
        spaceBetween={50}
        slidesPerView={1}
        modules={[Navigation]}
        navigation
        onRealIndexChange={(swiper: any) =>
          setStatusProgress(swiper.activeIndex + 1)
        }
      >
        {TRAININGS_SLIDES.map((slide) => (
          <SwiperSlide key={slide.title}>
            <div className={s.slide_container}>
              <div className={s.slide_container_text}>
                <span className={s.slide_status}>{`${slide.status} шаг`}</span>
                <h2 className={s.slide_header}>{slide.title}</h2>
                <span className={s.slide_description}>{slide.description}</span>
              </div>
              <div className={s.image_container}>
                <img src={`${process.env.PUBLIC_URL}/${slide.img_desktop}`} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <ButtonMain
        text="Получить консультацию"
        style={{
          minWidth: "400px",
          margin: "0 auto",
          marginTop: "50px",
          fontSize: "24px",
        }}
      />
    </div>
  );
}
