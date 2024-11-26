import s from "./Products.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { PRODUCTS } from "../../../../constants";
import { ButtonMain } from "../../../../components/ButtonMain/ButtonMain";
import { useRef } from "react";
import { useInView } from "framer-motion";

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
  const refAnimationProducts = useRef(null);
  const isInViewProducts = useInView(refAnimationProducts, { once: true });
  return (
    <div
      className={s.root}
      ref={refAnimationProducts}
      style={{ opacity: isInViewProducts ? 1 : 0, transition: "opacity 2s" }}
    >
      <h2 className={s.header}>Стоимость занятий</h2>
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
                  <img src={`${process.env.PUBLIC_URL}/${product.img}`} />
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
      <div className={s.price_container_pdf}>
        <span>Скачайте полный прайс-лист</span>
        <div className={s.price_button_container_pdf}>
          <a
            className={s.button_pdf}
            href={`${process.env.PUBLIC_URL}/price.pdf`}
            rel="noopener noreferrer"
            target="_blank"
          >
            Скачать{" "}
            <img
              src={`${process.env.PUBLIC_URL}/images/products/pdf_icon.png`}
              className={s.pdf_icon}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
