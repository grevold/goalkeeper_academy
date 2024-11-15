import { Box, Stack, Typography } from "@mui/material";
import s from "./CoachesMobile.module.css";
import { Pattern } from "../../../../../icons/Pattern";
import { SmallPattern } from "../../../../../icons/SmallPattern";
import { useRef } from "react";
import { useInView } from "framer-motion";

export function CoachesMobile() {
  const refAnimationCoaches = useRef(null);
  const isInViewCoaches = useInView(refAnimationCoaches, { once: true });
  return (
    <div
      className={s.root}
      ref={refAnimationCoaches}
      style={{ opacity: isInViewCoaches ? 1 : 0, transition: "opacity 2s" }}
    >
      <h2 className={s.header}>Тренерский состав</h2>
      <Stack
        direction="row"
        alignItems="start"
        justifyContent="space-between"
        sx={{
          width: "100%",
          paddingLeft: "50px",
          overflow: "hidden",
        }}
      >
        <Stack direction="column" gap="10px">
          <span className={s.coach_name}>Чистяков Алексей Валерьевич</span>
          <span className={s.rank}>Тренер высшей категории</span>
        </Stack>
        <Stack sx={{ position: "relative" }}>
          <div className={s.image_container}>
            <Box
              component="img"
              sx={{ width: "100%" }}
              src={`${process.env.PUBLIC_URL}/images/coaches/trener.png`}
              mr="50px"
            />
          </div>

          <div className={s.pattern}>
            <SmallPattern />
          </div>
        </Stack>
      </Stack>

      <Stack
        direction="column"
        display="flex"
        alignItems="start"
        justifyContent="space-between"
        sx={{ paddingLeft: "50px", paddingRight: "50px" }}
      >
        <Stack
          direction="row"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap="20px"
          mt="30px"
        >
          <Box
            component="img"
            width="50px"
            src={`${process.env.PUBLIC_URL}/images/coaches/trener_icon_1.png`}
          />
          <Typography sx={{ width: "100%" }} fontSize="14px">
            Опыт работы с 2008г. Образование высшее, спортивное - УралГУФК
          </Typography>
        </Stack>
        <Stack
          direction="row"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap="20px"
          mt="30px"
        >
          <Box
            component="img"
            width="50px"
            src={`${process.env.PUBLIC_URL}/images/coaches/trener_icon_2.png`}
          />
          <Typography sx={{ width: "100%" }} fontSize="14px">
            Тренер специализированных сборов вратарей «СЕЙВ», «GOALKEEPERS ELITE
            CAMP».
          </Typography>
        </Stack>
        <Stack
          direction="row"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap="20px"
          mt="30px"
        >
          <Box
            component="img"
            width="50px"
            src={`${process.env.PUBLIC_URL}/images/coaches/trener_icon_3.png`}
          />
          <Typography sx={{ width: "100%" }} fontSize="14px">
            Тренер вратарей СШОР им. С. Макарова. ("ХШМ", г. Челябинск)
          </Typography>
        </Stack>
      </Stack>
    </div>
  );
}
