import { TrainingsDesktop } from "./components/TrainingsDesktop/TrainingsDesktop";
import { TrainingsMobile } from "./components/TrainingsMobile/TrainingsMobile";

export function Trainings() {
  return (
    <div id="trainings">
      <TrainingsMobile />
      <TrainingsDesktop />
    </div>
  );
}
