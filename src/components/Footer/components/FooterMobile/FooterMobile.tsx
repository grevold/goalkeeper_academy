import cn from "classnames";
import s from "./FooterMobile.module.css";
import { Box, Button, Stack, Typography } from "@mui/material";
import { NAV } from "../../../../constants";
import { VKIcon } from "../../../../icons/socials/VKIcon";
import { TGIcon } from "../../../../icons/socials/TGIcon";
import { WAPPIcon } from "../../../../icons/socials/WAPPIcon";
import { RTIcon } from "../../../../icons/socials/RTIcon";

export function FooterMobile() {
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
  return (
    <footer className={s.root}>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "start",
        }}
      >
        <Box
          component="img"
          sx={{ width: "132px" }}
          src={`${process.env.PUBLIC_URL}/images/logo_footer_mobile.png`}
        />
        <a href="https://chlhl.ru/" style={{ cursor: "pointer", textDecoration: "none" }}>
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
        </a>
      </Stack>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "start",
          gap: "20px",
        }}
        mt="50px"
      >
        {NAV.map((navItem) => (
          <Typography
            key={navItem.title}
            sx={{ width: "100px" }}
            onClick={() => scrollToBlock(navItem.href)}
          >
            {navItem.title}
          </Typography>
        ))}
      </Stack>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "start",
          gap: "20px",
        }}
        mt="50px"
        mb="100px"
      >
        <Typography fontSize="14px">
          Звоните по номеру телефона или пишите в удобной для вас социальной
          сети
        </Typography>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
          mb="30px"
        >
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
        </Stack>
        <Button
          sx={{
            width: "100%",
            border: "2px solid red",
            borderRadius: "20px",
            paddingTop: "20px",
            paddingBottom: "20px",
            color: "white",
            fontSize: "20px",
          }}
          href="tel:+79194066735"
        >
          Позвонить
        </Button>
      </Stack>
    </footer>
  );
}
