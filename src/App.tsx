import { Modal } from "@mui/material";
import { Layout } from "./components/Layout/Layout";
import { MainPaige } from "./pages/MainPaige/MainPaige";
import { createContext, useMemo, useState } from "react";

interface IContext {
  isModalOpened: boolean;
  setIsModalOpened: (isModalOpened: boolean) => void;
}

export const Context = createContext<IContext>({
  isModalOpened: false,
  setIsModalOpened: () => undefined,
});

function App() {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const value = useMemo<IContext>(
    () => ({ isModalOpened, setIsModalOpened }),
    [isModalOpened]
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
