import { Box, Stack, Typography } from "@mui/material";
import s from "./AboutUsMobile.module.css";
import { Pattern } from "../../../../../../icons/Pattern";

export function AboutUsMobile() {
  return (
    <div className={s.root}>
      <Stack style={{ width: "100%" }} pl="50px" pr="50px">
        <Typography variant="h5" fontSize="32px" mb="14px">
          <b>Кто мы такие?</b>
        </Typography>
        <Typography mb="20px">
          Вратарская академия - это пространство для развития хоккейных вратарей
        </Typography>
      </Stack>

      <div className={s.image_container}>
        <Box
          component="img"
          sx={{ width: "100%" }}
          src={`${process.env.PUBLIC_URL}/images/aboutus/about_us_goalkeeper.png`}
          style={{ position: "absolute", zIndex: "2" }}
        />

        <div>
          <Pattern width={"463"} height={"243"} />
        </div>
      </div>

      <Stack
        style={{ width: "100%", maxWidth: "600px" }}
        pl="50px"
        pr="50px"
        mt="20px"
      >
        <Typography fontSize="14px" mb="20px">
          Современная игра диктует свои правила, первое из которых - идти в ногу
          со временем, но брать лучшее и проверенное из прошлого.
        </Typography>
        <Typography fontSize="14px">
          Мы придерживаемся этого и предлагаем вратарям всех уровней подготовки
          и возрастов не только хорошо организованные дополнительные тренировки
          с опытными тренерами, но и систему, следующую слогану "всё для
          голкиперов", как сообщество по обмену опытом, мнениями в атмосфере
          взаимопомощи и взаимовыручки, в центре чего, конечно же, стремление к
          самосовершенствованию и развитию необходимых навыков, благодаря помощи
          настоящих профессионалов своего дела.
        </Typography>
      </Stack>
    </div>
  );
}
