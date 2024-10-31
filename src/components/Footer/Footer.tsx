import cn from "classnames";
import s from "./Footer.module.css";
import { FooterMobile } from "./components/FooterMobile/FooterMobile";
import { FooterDesktop } from "./components/FooterDesktop/FooterDesktop";

interface Props {
  className?: string;
}

export function Footer({ className }: Props) {
  return (
    <>
      <FooterMobile />
      <FooterDesktop />
    </>
  )
}
