import { useContext } from "react";
import s from "./ModalMobile.module.css";
import { Context } from "../../../../App";
import { CloseCross } from "../../../../icons/CloseCross";
import { VKIcon } from "../../../../icons/socials/VKIcon";
import { TGIcon } from "../../../../icons/socials/TGIcon";
import { WAPPIcon } from "../../../../icons/socials/WAPPIcon";
import { RTIcon } from "../../../../icons/socials/RTIcon";
import { Box } from "@mui/material";

export function ModalMobile() {
  const { isModalOpened, setIsModalOpened } = useContext(Context);

  if (isModalOpened) {
    return (
      <div className={s.root}>
        <div className={s.modal_bg} />
        <div className={s.container}>
          <div
            className={s.close_button_container}
            onClick={() => setIsModalOpened(false)}
          >
            <CloseCross />
          </div>

          <div className={s.text_container}>
            <span>
              Звоните по номеру телефона или пишите в удобной для вас социальной
              сети
            </span>
            <div className={s.admin}>
              <span style={{ fontSize: "24px" }}>
                <b>Борисенко Александр</b>
              </span>
              <span>Администратор проекта</span>
            </div>
          </div>
          <a className={s.button} href="tel:+79194066735">
            Позвонить
          </a>
          <div className={s.socials_container}>
            <a href="https://vk.com/goalieacademy">
              <VKIcon />
            </a>
            <a href="https://t.me/goalieacademy">
              <TGIcon />
            </a>
            <a href="https://wa.me/79194066735">
              <WAPPIcon />
            </a>
            <a href="https://rutube.ru/channel/42988847/">
              <RTIcon />
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
