import { CoachesDesktop } from "./CoachesDesktop/CoachesDesktop";
import { CoachesMobile } from "./CoachesMobile/CoachesMobile";

export function Coaches() {
  return (
    <div id="coaches">
      <CoachesMobile />
      <CoachesDesktop />
    </div>
  );
}
