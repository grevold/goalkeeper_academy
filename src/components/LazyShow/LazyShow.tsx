import s from "./LazyShow.module.css";
export const LazyShow = ({ children }: any) => {
  return <div className={s.lazy_div}>{children}</div>;
};
