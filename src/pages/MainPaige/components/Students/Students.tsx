import { useRef } from "react";
import { ButtonMain } from "../../../../components/ButtonMain/ButtonMain";
import { STUDENTS } from "../../../../constants";
import s from "./Students.module.css";
import { useInView } from "framer-motion";

export function Students() {
  const refAnimationStudents = useRef(null);
  const isInViewStudents = useInView(refAnimationStudents, { once: true });
  return (
    <div className={s.root}>
      <h2 className={s.header}>Вратари-воспитанники</h2>
      <div className={s.container} ref={refAnimationStudents}>
        {STUDENTS.map((student, index) => (
          <div
            key={student.name}
            className={s.student_card}
            style={{
              opacity: isInViewStudents ? 1 : 0,
              transition: `opacity ${index + 2}s`,
            }}
          >
            <div className={s.photos_container}>
              <div className={s.red_square}></div>
              <img src={`${process.env.PUBLIC_URL}/${student.photoCoach}`} className={s.photo_coach} />
              <img src={`${process.env.PUBLIC_URL}/${student.photoHockey}`} className={s.photo_hockey} />
            </div>
            <span className={s.name}>{student.name}</span>
            <span className={s.description}>{student.description}</span>
          </div>
        ))}
      </div>
      <ButtonMain
        text="Стать чемпионом"
        style={{
          minWidth: "300px",
          margin: "0 auto",
          marginTop: "80px",
          fontSize: "24px",
        }}
      />
    </div>
  );
}
