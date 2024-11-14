import { useContext, useEffect, useRef } from "react";
import s from "./Modal.module.css";
import { Context } from "../../App";
import { ModalDesktop } from "./components/ModalDesktop/ModalDesktop";
import { ModalMobile } from "./components/ModalMobile/ModalMobile";
const bodyScrollLock = require("body-scroll-lock");

export function Modal() {
  const { isModalOpened, setIsModalOpened } = useContext(Context);
  

  const refBody = useRef(null);
  const disableBodyScroll = bodyScrollLock.disableBodyScroll;
  const enableBodyScroll = bodyScrollLock.enableBodyScroll;

  useEffect(() => {
    if (isModalOpened) {
      disableBodyScroll(refBody);
    } else {
      enableBodyScroll(refBody);
    }
  }, [isModalOpened]);

  if (isModalOpened) {
    return (
      <div className={s.root}>
        <ModalMobile />
        <ModalDesktop />
      </div>
    );
  } else {
    return null;
  }
}
