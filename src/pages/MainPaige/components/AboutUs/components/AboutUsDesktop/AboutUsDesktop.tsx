
import s from "./AboutUsDesktop.module.css";
import { Pattern } from "../../../../../../icons/Pattern";
import { useRef } from "react";
import { useInView } from "framer-motion";

export function AboutUsDesktop() {
  const refAnimationGoalkeeper = useRef(null);
  const isInViewGoalkeeper = useInView(refAnimationGoalkeeper, { once: true });

  const refAnimationPattern = useRef(null);
  const isInViewPattern = useInView(refAnimationPattern, { once: true });

  return (
    <div className={s.root}>
      <div className={s.text_container}>
        <div style={{ width: "100%" }}>
          <h2 className={s.header}>
            <b>Кто мы такие?</b>
          </h2>

          <span className={s.sub_title}>
            Вратарская академия - это пространство для развития хоккейных
            вратарей
          </span>
          <span className={s.text}>
            Современная игра диктует свои правила, первое из которых - идти в
            ногу со временем, но брать лучшее и проверенное из прошлого. Мы
            придерживаемся этого и предлагаем вратарям всех уровней подготовки и
            возрастов не только хорошо организованные дополнительные тренировки
            с опытными тренерами, но и систему, следующую слогану "всё для
            голкиперов", как сообщество по обмену опытом, мнениями в атмосфере
            взаимопомощи и взаимовыручки, в центре чего, конечно же, стремление
            к самосовершенствованию и развитию необходимых навыков, благодаря
            помощи настоящих профессионалов своего дела.
          </span>
        </div>
      </div>

      <div className={s.image_container} ref={refAnimationGoalkeeper}>
        <img
          className={s.image}
          src={`${process.env.PUBLIC_URL}/images/aboutus/about_us_goalkeeper.png`}
          style={{
            right: isInViewGoalkeeper ? -300 : -600,
            transition: "right 1s",
          }}
        />
      </div>

      <div
        ref={refAnimationPattern}
        className={s.pattern}
        style={{
          right: isInViewPattern ? -100 : -600,
          transition: "right 1s",
        }}
      >
        <Pattern width={"463"} height={"243"} />
      </div>
    </div>
  );
}
