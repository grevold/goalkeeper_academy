import { AboutUsDesktop } from "./components/AboutUsDesktop/AboutUsDesktop";
import { AboutUsMobile } from "./components/AboutUsMobile/AboutUsMobile";

export function AboutUs() {
  return (
    <div id="about_us">
      <AboutUsMobile />
      <AboutUsDesktop />
    </div>
  );
}
