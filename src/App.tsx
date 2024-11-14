import { Modal } from "@mui/material";
import { Layout } from "./components/Layout/Layout";
import { MainPaige } from "./pages/MainPaige/MainPaige";
import { createContext, useMemo, useState } from "react";

interface IContext {
  isModalOpened: boolean;
  setIsModalOpened: (isModalOpened: boolean) => void;
  isAlert: boolean;
  setIsAlert: (isAlert: boolean) => void;
}

export const Context = createContext<IContext>({
  isModalOpened: false,
  setIsModalOpened: () => undefined,
  isAlert: false,
  setIsAlert: () => undefined,
});

function App() {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isAlert, setIsAlert] = useState(false);

  const value = useMemo<IContext>(
    () => ({ isModalOpened, setIsModalOpened, isAlert, setIsAlert }),
    [isModalOpened, isAlert]
  );
  return (
    <Context.Provider value={value}>
      <Layout>
        <MainPaige />
      </Layout>
    </Context.Provider>
  );
}

export default App;
