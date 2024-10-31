import { HeaderDesktop } from "./components/HeaderDesktop/HeaderDesktop";
import { HeaderMobile } from "./components/HeaderMobile/HeaderMobile";
import s from "./Header.module.css";

export function Header() {
  return (
    <>
      <HeaderMobile />
      <HeaderDesktop />
    </>
  );
}
