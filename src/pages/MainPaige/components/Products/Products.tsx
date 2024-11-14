import s from "./Products.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { PRODUCTS } from "../../../../constants";
import { ButtonMain } from "../../../../components/ButtonMain/ButtonMain";
import { Stack } from "@mui/material";

export function Products() {
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
    <div className={s.root}>
      <h2 className={s.header}>Наши услуги</h2>
      <Swiper
        loop
        className={s.swiper}
      
        slidesPerView={1}
        modules={[Navigation]}
        navigation
        pagination
        {...params}
      >
        {PRODUCTS.map((product) => (
          <SwiperSlide key={product.title}>
            <div className={s.slide_container}>
              <div className={s.card}>
                <h2 className={s.slide_header}>{product.title}</h2>
                <div className={s.img_container}>
                  <img src={product.img} />
                </div>
                <div className={s.description}>
                  <div className={s.price_container}>
                    <div className={s.price_row}>
                      <span>Первое пробное занятие</span>
                      <span className={s.price}>{product.first_lesson} ₽</span>
                    </div>
                  </div>
                  <div className={s.price_container}>
                    <div className={s.price_row}>
                      <span>Разовое занятие</span>
                      <span className={s.price}>{product.one_lesson} ₽</span>
                    </div>
                  </div>
                  <div className={s.price_container}>
                    <div className={s.price_row}>
                      <span>Абонемент на месяц</span>
                      <span className={s.price}>{product.month_lessons} ₽</span>
                    </div>
                  </div>
                  <div className={s.price_container}>
                    <div className={s.price_row}>
                      <span>Индивидуальное занятие</span>
                      <span className={s.price}>
                        {product.personal_lesson} ₽
                      </span>
                    </div>
                  </div>
                </div>

                <ButtonMain
                  text="Записаться"
                  style={{ width: "100%", maxWidth: "250px" }}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
