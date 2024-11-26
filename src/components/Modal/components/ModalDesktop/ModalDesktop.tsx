import { useContext, useState } from "react";
import s from "./ModalDesktop.module.css";
import { Context } from "../../../../App";
import { CloseCross } from "../../../../icons/CloseCross";
import { VKIcon } from "../../../../icons/socials/VKIcon";
import { TGIcon } from "../../../../icons/socials/TGIcon";
import { WAPPIcon } from "../../../../icons/socials/WAPPIcon";
import { RTIcon } from "../../../../icons/socials/RTIcon";
import { ModalPattern } from "../../../../icons/ModalPattern";
import { CopyIcon } from "../../../../icons/CopyIcon";

export function ModalDesktop() {
  const { isModalOpened, setIsModalOpened } = useContext(Context);
  const [isCopy, setIsCopy] = useState(false);

  const handleCopy = () => {
    copyTextToClipboard("89194066735");
    setIsCopy(true);
  };

  const copyTextToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      alert("Ошибка:");
    }
  };

  if (isModalOpened) {
    return (
      <div className={s.root}>
        <div className={s.modal_bg} onClick={() => setIsModalOpened(false)} />
        <div className={s.container}>
          <div
            className={s.close_button_container}
            onClick={() => setIsModalOpened(false)}
          >
            <CloseCross />
          </div>

          <div className={s.text_container}>
            <span className={s.text}>
              Звоните по номеру телефона или пишите <br />в удобной для вас
              социальной сети
            </span>
            <div className={s.admin}>
              <span style={{ fontSize: "32px" }}>
                <b>Борисенко Александр</b>
              </span>
              <span style={{ fontSize: "24px" }}>Руководитель проекта</span>
            </div>
          </div>
          <div className={s.number_container}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <ModalPattern />
              <span style={{ fontSize: "32px", fontWeight: "600" }}>
                +7 919 406 67 35
              </span>
            </div>
            <div className={s.copy_container}>
              {isCopy ? (
                <span>телефон скопирован</span>
              ) : (
                <button className={s.button_copy} onClick={handleCopy}>
                  <CopyIcon />
                </button>
              )}
            </div>
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
      </div>
    );
  } else {
    return null;
  }
}
