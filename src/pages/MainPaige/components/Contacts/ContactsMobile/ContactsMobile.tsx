import { Box, Stack, Typography } from "@mui/material";
import s from "./ContactsMobile.module.css";
import { Pattern } from "../../../../../icons/Pattern";
import { SmallPattern } from "../../../../../icons/SmallPattern";
import { ButtonMain } from "../../../../../components/ButtonMain/ButtonMain";
import { VKIcon } from "../../../../../icons/socials/VKIcon";
import { TGIcon } from "../../../../../icons/socials/TGIcon";
import { WAPPIcon } from "../../../../../icons/socials/WAPPIcon";
import { RTIcon } from "../../../../../icons/socials/RTIcon";
import { text } from "stream/consumers";
import { useRef } from "react";
import { useInView } from "framer-motion";

export function ContactsMobile() {
  const refAnimationContacts = useRef(null);
  const isInViewContacts = useInView(refAnimationContacts, { once: true });
  return (
    <div
      className={s.root}
      ref={refAnimationContacts}
      style={{ opacity: isInViewContacts ? 1 : 0, transition: "opacity 2s" }}
    >
      <h2 className={s.header}>Контакты</h2>
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
        <div className={s.text_container}>
          <span className={s.coach_name}>Борисенко Александр</span>
          <span className={s.rank}>Руководитель проекта</span>
        </div>
        <Stack sx={{ position: "relative" }}>
          <div className={s.image_container}>
            <Box
              component="img"
              sx={{ width: "100%" }}
              src={`${process.env.PUBLIC_URL}/images/contacts/alexander.png`}
              mr="50px"
            />
          </div>

          <div className={s.pattern}>
            <SmallPattern />
          </div>
        </Stack>
      </Stack>
      <span className={s.text}>
        Звоните по номеру телефона или пишите в удобной для вас социальной сети
      </span>
      <div className={s.button_container}>
        <a href="tel:+79194066735">
          <ButtonMain
            call={true}
            text="Позвонить"
            style={{ width: "100%", maxWidth: "280px" }}
          />
        </a>
      </div>
      <div className={s.socials_container}>
        <a href="https://vk.com/goalieacademy">
          <VKIcon />
        </a>
        <a href="https://t.me/goalieacademy">
          <TGIcon />
        </a>
        <a href="+79194066735">
          <WAPPIcon />
        </a>
        <a href="https://rutube.ru/channel/42988847/">
          <RTIcon />
        </a>
      </div>
    </div>
  );
}
