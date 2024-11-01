import cn from "classnames";
import s from "./FooterDesktop.module.css";
import { VKIcon } from "../../../../icons/socials/VKIcon";
import { TGIcon } from "../../../../icons/socials/TGIcon";
import { WAPPIcon } from "../../../../icons/socials/WAPPIcon";
import { RTIcon } from "../../../../icons/socials/RTIcon";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { NAV } from "../../../../constants";

export function FooterDesktop() {
  return (
    <>
      <hr className={s.divider} />
      <footer className={s.root}>
        <div className={s.logos_container}>
          <img
            className={s.logo}
            src={`${process.env.PUBLIC_URL}/images/logo_footer_mobile.png`}
          />

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
              sx={{ maxWidth: "150px", textAlign: "center", fontSize: "14px" }}
            >
              При поддержке <b>Челябинской Любительской Хоккейной Лиги</b>
            </Typography>
          </Stack>
        </div>

        <div className={s.nav_container}>
          {NAV.map((navItem) => (
            <span key={navItem.title} className={s.nav}>
              {navItem.title}
            </span>
          ))}
        </div>

        <div className={s.socials_container}>
          <VKIcon />
          <TGIcon />
          <WAPPIcon />
          <RTIcon />
        </div>
      </footer>
    </>
  );
}
