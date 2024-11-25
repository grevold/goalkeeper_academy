import s from "./Reviews.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { PRODUCTS, REVIEWS } from "../../../../constants";
import { ButtonMain } from "../../../../components/ButtonMain/ButtonMain";
import { Stack } from "@mui/material";
import { useRef } from "react";
import { useInView } from "framer-motion";

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
  const refAnimationReviews = useRef(null);
  const isInViewReviews = useInView(refAnimationReviews, { once: true });
  return (
    <div
      className={s.root}
      id="reviews"
      ref={refAnimationReviews}
      style={{ opacity: isInViewReviews ? 1 : 0, transition: "opacity 2s" }}
    >
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
                <img src={`${process.env.PUBLIC_URL}/${review}`} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
