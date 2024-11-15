import { Box, Stack } from "@mui/material";
import s from "./CoachesDesktop.module.css";
import { SmallPattern } from "../../../../../icons/SmallPattern";
import { useRef } from "react";
import { useInView } from "framer-motion";

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
  const refAnimationCoach = useRef(null);
  const isInViewCoach = useInView(refAnimationCoach, { once: true });

  const refAnimationPattern = useRef(null);
  const isInViewPattern = useInView(refAnimationPattern, { once: true });
  console.log(isInViewCoach);
  return (
    <div className={s.root} id="coaches">
      <h2 className={s.header}>Тренерский состав</h2>
      <div className={s.info}>
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

        <div style={{ position: "relative" }}>
          <div
            className={s.image_container}
            ref={refAnimationCoach}
            style={{
              marginRight: isInViewCoach ? "60px" : "0px",
              transition: "margin-right 1s",
            }}
          >
            <img
              className={s.image}
              src={`${process.env.PUBLIC_URL}/images/coaches/trener.png`}
              style={{ zIndex: "2" }}
            />
          </div>

          <div
            className={s.pattern}
            ref={refAnimationPattern}
            style={{
              marginRight: isInViewPattern ? "100px" : "10px",
              transition: "margin-right 2s",
            }}
          >
            <SmallPattern />
          </div>
        </div>
      </div>
    </div>
  );
}
