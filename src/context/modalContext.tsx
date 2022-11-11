
import { createContext, useState, ReactNode } from "react";

export interface IModalCart {
    modalCartOpen: boolean;
    setModalCartOpen: Function;
}

export const ModalCartContext = createContext<IModalCart | {}>({});

const ModalCartProvider = ({ children }: { children: ReactNode }) => {
  const [modalCartOpen, setModalCartOpen] = useState<boolean>(false);
  return (
    <ModalCartContext.Provider value={{ modalCartOpen, setModalCartOpen }}>
      {children}
    </ModalCartContext.Provider>
  );
};

export default ModalCartProvider;