import cn from "classnames";
import s from "./FooterDesktop.module.css";
import { VKIcon } from "../../../../icons/socials/VKIcon";
import { TGIcon } from "../../../../icons/socials/TGIcon";
import { WAPPIcon } from "../../../../icons/socials/WAPPIcon";
import { RTIcon } from "../../../../icons/socials/RTIcon";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { NAV } from "../../../../constants";
import { useRef } from "react";
import { useInView } from "framer-motion";

export function FooterDesktop() {
  const scrollToBlock = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "start",
      });
    }
  };
  const refAnimationFooter = useRef(null);
  const isInViewFooter = useInView(refAnimationFooter, { once: true });
  return (
    <>
      <hr className={s.divider} />
      <footer
        className={s.root}
        ref={refAnimationFooter}
        style={{
          opacity: isInViewFooter ? 1 : 0,
          transition: `opacity 2s`,
        }}
      >
        <div className={s.logos_container}>
          <img
            className={s.logo}
            src={`${process.env.PUBLIC_URL}/images/logo_footer_mobile.png`}
          />
          <a
            href="https://chlhl.ru/"
            rel="noopener noreferrer"
            target="_blank"
            style={{ cursor: "pointer", textDecoration: "none" }}
          >
            <Stack
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                sx={{ width: "80px" }}
                src={`${process.env.PUBLIC_URL}/images/footer/chlhl.png`}
              />
              <Typography
                sx={{
                  maxWidth: "150px",
                  textAlign: "center",
                  fontSize: "14px",
                }}
              >
                При поддержке <b>Челябинской Любительской Хоккейной Лиги</b>
              </Typography>
            </Stack>
          </a>
        </div>

        <ul className={s.nav_container}>
          {NAV.map((navItem) => (
            <li key={navItem.title} onClick={() => scrollToBlock(navItem.href)}>
              <span className={s.nav}>{navItem.title}</span>
            </li>
          ))}
        </ul>

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
      </footer>
    </>
  );
}
