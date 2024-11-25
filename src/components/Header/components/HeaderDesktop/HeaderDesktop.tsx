import { Box, Stack } from "@mui/material";
import s from "./HeaderDesktop.module.css";
import { NAV } from "../../../../constants";
import { useState } from "react";
export function HeaderDesktop() {
  const [state, setState] = useState(NAV[0].title);
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
    <header className={s.root}>
      <Stack
        direction="row"
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className={s.logo_container}>
          <Box
            component="img"
            sx={{ width: "50px" }}
            src={`${process.env.PUBLIC_URL}/images/logo_mini.png`}
          />
          <span>
            ВРАТАРСКАЯ
            <br />
            АКАДЕМИЯ
            <br />
            ЧЕЛЯБИНСК
          </span>
        </div>

        <ul className={s.nav_list}>
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
      </Stack>
    </header>
  );
}
