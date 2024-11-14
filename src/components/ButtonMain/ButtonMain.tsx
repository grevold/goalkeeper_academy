import { useContext } from "react";
import s from "./ButtonMain.module.css";
import { Context } from "../../App";

interface Props {
  text: string;
  style?: any;
  call?: boolean;
}

export function ButtonMain({ text, style, call }: Props) {
  const { isModalOpened, setIsModalOpened } = useContext(Context);
  return (
    <div
      className={s.root}
      onClick={!call ? () => setIsModalOpened(true) : () => {}}
      style={style}
    >
      {text}
    </div>
  );
}
