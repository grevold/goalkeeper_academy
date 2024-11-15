import { Box, Stack } from "@mui/material";
import s from "./ContactsDesktop.module.css";
import { SmallPattern } from "../../../../../icons/SmallPattern";
import { VKIcon } from "../../../../../icons/socials/VKIcon";
import { TGIcon } from "../../../../../icons/socials/TGIcon";
import { WAPPIcon } from "../../../../../icons/socials/WAPPIcon";
import { RTIcon } from "../../../../../icons/socials/RTIcon";
import { ModalPattern } from "../../../../../icons/ModalPattern";
import { CopyIcon } from "../../../../../icons/CopyIcon";
import { useRef } from "react";
import { useInView } from "framer-motion";

export function ContactsDesktop() {
  const copyTextToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Текст успешно скопирован в буфер обмена!");
    } catch (err) {
      alert("Ошибка:");
    }
  };
  const refAnimationCoach = useRef(null);
  const isInViewCoach = useInView(refAnimationCoach, { once: true });

  const refAnimationPattern = useRef(null);
  const isInViewPattern = useInView(refAnimationPattern, { once: true });
  return (
    <div className={s.root}>
      <h2 className={s.header}>Контакты</h2>
      <div className={s.info_container}>
        <div className={s.text_container}>
          <span className={s.coach_name}>Александр</span>
          <span className={s.rank}>Руководитель проекта</span>
          <span className={s.text}>
            Звоните по номеру телефона или пишите <br />в удобной для вас
            социальной сети
          </span>
          <div className={s.number_container}>
            <ModalPattern />
            <span style={{ fontSize: "32px", fontWeight: "600" }}>
              +7 919 406 67 35
            </span>
            <button
              className={s.button_copy}
              onClick={() => copyTextToClipboard("89194066735")}
            >
              <CopyIcon />
            </button>
          </div>
        </div>
        <Stack sx={{ position: "relative" }}>
          <div
            className={s.image_container}
            ref={refAnimationCoach}
            style={{
              marginRight: isInViewCoach ? "100px" : "0px",
              transition: "margin-right 1s",
            }}
          >
            <Box
              component="img"
              sx={{ width: "100%" }}
              src={`${process.env.PUBLIC_URL}/images/contacts/alexander.png`}
              mr="50px"
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
        </Stack>
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
