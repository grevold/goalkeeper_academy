import { Box, Stack, Typography } from "@mui/material";
import s from "./CoachesDesktop.module.css";
import { SmallPattern } from "../../../../../icons/SmallPattern";
import { useEffect, useState } from "react";

const achievements = [
  {
    icon: "images/coaches/trener_icon_1.png",
    description: `Опыт работы с 2008г. Образование высшее, спортивное - УралГУФК`,
  },
  {
    icon: "images/coaches/trener_icon_2.png",
    description: `Тренер специализированных сборов вратарей «СЕЙВ», «GOALKEEPERS ELITECAMP».`,
  },
  {
    icon: "images/coaches/trener_icon_3.png",
    description: `Тренер вратарей СШОР им. С. Макарова. ("ХШМ", г. Челябинск)`,
  },
];

export function CoachesDesktop() {
  return (
    <div className={s.root} id="coaches">
      <Stack sx={{ paddingLeft: "50px", paddingRight: "50px" }}>
        <h2 className={s.header}>Тренерский состав</h2>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{
          width: "100%",
          paddingLeft: "50px",
          paddingRight: "50px",
          overflow: "hidden",
        }}
      >
        <Stack direction="column">
          <Stack direction="column" gap="10px">
            <span className={s.coach_name}>Чистяков Алексей Валерьевич</span>
            <span className={s.rank}>Тренер высшей категории</span>
          </Stack>
          <Stack
            direction="column"
            display="flex"
            alignItems="start"
            justifyContent="space-between"
            mt="30px"
            gap="20px"
          >
            {achievements.map((achievement) => (
              <Stack
                key={achievement.icon}
                direction="row"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                gap="10px"
              >
                <img
                  className={s.icon}
                  src={`${process.env.PUBLIC_URL}/${achievement.icon}`}
                />

                <span className={s.achievement_description}>
                  {achievement.description}
                </span>
              </Stack>
            ))}
          </Stack>
        </Stack>

        <Stack sx={{ position: "relative" }}>
          <div className={s.image_container}>
            <Box
              component="img"
              sx={{ width: "100%" }}
              src={`${process.env.PUBLIC_URL}/images/coaches/trener.png`}
              style={{ zIndex: 2 }}
            />
          </div>

          <div className={s.pattern}>
            <SmallPattern />
          </div>
        </Stack>
      </Stack>
    </div>
  );
}
