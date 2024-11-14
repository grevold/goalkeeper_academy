import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Modal } from "../Modal/Modal";
import s from "./Layout.module.css";

interface Props {
  children?: JSX.Element;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <main className={s.root}>
      <Modal />
      <Header />
      <div className={s.container}>{children}</div>
      <Footer className={s.footer} />
    </main>
  );
};
