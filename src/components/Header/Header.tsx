import { HeaderDesktop } from "./components/HeaderDesktop/HeaderDesktop";
import { HeaderMobile } from "./components/HeaderMobile/HeaderMobile";

export function Header() {
  return (
    <>
      <HeaderMobile />
      <HeaderDesktop />
    </>
  );
}
