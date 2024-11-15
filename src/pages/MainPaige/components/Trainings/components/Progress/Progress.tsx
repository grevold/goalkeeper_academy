import s from "./Progress.module.css";

interface Props {
  status: number;
  changeStatus: React.Dispatch<React.SetStateAction<number>>;
}

export function Progress({ status, changeStatus }: Props) {
  if (status === 1) {
    return (
      <div className={s.root}>
        <hr className={s.bar} />
        <div className={s.circle_active}>1</div>
        <div className={s.circle}>2</div>
        <div className={s.circle}>3</div>
      </div>
    );
  }
  if (status === 2) {
    return (
      <div className={s.root}>
        <hr className={s.bar_step_two} />
        <div className={s.circle_active}>1</div>
        <div className={s.circle_active}>2</div>
        <div className={s.circle}>3</div>
      </div>
    );
  }
  return (
    <div className={s.root}>
      <hr className={s.bar_step_three} />
      <div className={s.circle_active}>1</div>
      <div className={s.circle_active}>2</div>
      <div className={s.circle_active}>3</div>
    </div>
  );
}
