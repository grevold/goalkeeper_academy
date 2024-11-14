import { AboutUs } from "./components/AboutUs/AboutUs";
import { Coaches } from "./components/Coaches/Coaches";
import { Contacts } from "./components/Contacts/Contacts";
import { Greeting } from "./components/Greeting/Greeting";
import { Products } from "./components/Products/Products";
import { Reviews } from "./components/Reviews/Reviews";
import { Students } from "./components/Students/Students";
import { Trainings } from "./components/Trainings/Trainings";
import s from "./MainPaige.module.css";

export function MainPaige() {
  return (
    <div className={s.root}>
      <Greeting />
      <AboutUs />
      <Trainings />
      <Coaches />
      <Students />
      <Products />
      <Reviews />
      <Contacts />
    </div>
  );
}
