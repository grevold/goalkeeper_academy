import { Box } from "@mui/material";
import { BurgerIcon } from "../../../../icons/BurgerIcon";
import s from "./HeaderMobile.module.css";
import { useContext, useEffect, useRef, useState } from "react";
import { CloseMenuIcon } from "../../../../icons/CloseMenuIcon";
import { NAV } from "../../../../constants";
import { Context } from "../../../../App";
const bodyScrollLock = require("body-scroll-lock");

export function HeaderMobile() {
  
  const [state, setState] = useState(NAV[0].title);
  const refBody = useRef(null);
  const disableBodyScroll = bodyScrollLock.disableBodyScroll;
  const enableBodyScroll = bodyScrollLock.enableBodyScroll;
  const [isOpenedMenu, setIsOpenedMenu] = useState(false);

  const handleClick = () => {
    setIsOpenedMenu((prev) => !prev);
  };

  const scrollToBlock = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "start",
      });
      setIsOpenedMenu(false);
    }
  };

  useEffect(() => {
    if (isOpenedMenu) {
      disableBodyScroll(refBody);
    } else {
      enableBodyScroll(refBody);
    }
  }, [isOpenedMenu]);

  return (
    <div className={s.container} ref={refBody}>
      <header className={s.root}>
        <div className={s.button_container}>
          <Box
            component="img"
            sx={{ width: "50px" }}
            src={`${process.env.PUBLIC_URL}/images/logo_mini.png`}
          />
          <button onClick={handleClick} className={s.button}>
            {isOpenedMenu ? <CloseMenuIcon /> : <BurgerIcon />}
          </button>
        </div>
      </header>
      <div
        className={
          isOpenedMenu ? s.nav_container_opened : s.nav_container_close
        }
      >
        <ul className={s.container_nav}>
          {NAV.map((navItem) => (
            <li
              key={navItem.title}
              className={s.nav_item}
              onMouseEnter={() => setState(navItem.title)}
              onClick={() => scrollToBlock(navItem.href)}
            >
              <span>{navItem.title}</span>
              {state === navItem.title ? (
                <hr className={s.nav_active_underline} />
              ) : (
                <hr className={s.nav_not_underline} />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
