import { ButtonMain } from "../../../../components/ButtonMain/ButtonMain";
import { STUDENTS } from "../../../../constants";
import s from "./Students.module.css";

export function Students() {
  return (
    <div className={s.root}>
      <h2 className={s.header}>Вратари-воспитанники</h2>
      <div className={s.container}>
        {STUDENTS.map((student) => (
          <div key={student.name} className={s.student_card}>
            <div className={s.photos_container}>
              <div className={s.red_square}></div>
              <img src={student.photoCoach} className={s.photo_coach} />
              <img src={student.photoHockey} className={s.photo_hockey} />
            </div>
            <span className={s.name}>{student.name}</span>
            <span className={s.description}>{student.description}</span>
          </div>
        ))}
      </div>
      <div className={s.button_container}>
        <ButtonMain text="Стать чемпионом!" />
      </div>
    </div>
  );
}
