import s from "./Reviews.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { PRODUCTS, REVIEWS } from "../../../../constants";
import { ButtonMain } from "../../../../components/ButtonMain/ButtonMain";
import { Stack } from "@mui/material";

export function Reviews() {
  const params = {
    breakpoints: {
      800: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  };
  return (
    <div className={s.root} id="reviews">
      <h2 className={s.header}>Отзывы</h2>
      <Swiper
        loop
        className={s.swiper}
        slidesPerView={1}
        modules={[Navigation]}
        navigation
        {...params}
      >
        {REVIEWS.map((review) => (
          <SwiperSlide key={review}>
            <div className={s.slide_container}>
              <div className={s.card}>
                <img src={review} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
