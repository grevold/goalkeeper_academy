import { Layout } from "../../components/Layout/Layout";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { Coaches } from "./components/Coaches/Coaches";
import { Greeting } from "./components/Greeting/Greeting";
import { Trainings } from "./components/Trainings/Trainings";
import s from "./MainPaige.module.css";

export function MainPaige() {
  return (
    <div className={s.root}>
      <Greeting />
      <AboutUs />
      <Trainings />
      <Coaches />
    </div>
  );
}
