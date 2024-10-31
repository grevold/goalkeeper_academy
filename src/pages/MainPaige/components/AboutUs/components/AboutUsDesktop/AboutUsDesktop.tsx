import { Stack, Typography } from "@mui/material";
import s from "./AboutUsDesktop.module.css";
import { Pattern } from "../../../../../../icons/Pattern";
import { useEffect, useState } from "react";

export function AboutUsDesktop() {
  const [scrollPattern, setScrollPattern] = useState(-10);

  useEffect(() => {
    const handleScroll = (event: any) => {
      setScrollPattern((scrollPattern) => {
        if (scrollPattern > -4) {
          return scrollPattern - 1;
        } else {
          return -4;
        }
      });
    };
    window.addEventListener("mousewheel", handleScroll);
    return () => window.removeEventListener("mousewheel", handleScroll);
  }, []);

  return (
    <div className={s.root}>
      <div className={s.text_container}>
        <Stack style={{ width: "100%" }} pl="50px" pr="50px">
          <Typography variant="h5" fontSize="32px" mb="14px">
            <b>Кто мы такие?</b>
          </Typography>

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
        </Stack>
      </div>

      <div className={s.image_container}>
        <img
          className={s.image}
          src={`${process.env.PUBLIC_URL}/images/aboutus/about_us_goalkeeper.png`}
        />
      </div>

      <div className={s.pattern} style={{ right: `${scrollPattern * 50}px` }}>
        <Pattern width={"463"} height={"243"} />
      </div>
    </div>
  );
}
