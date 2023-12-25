import { useState, useContext, createContext, type ReactNode } from 'react';

type ModalContext = {
  close: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const modalContext = createContext<ModalContext | null>(null);

export default function ModalProvider({ children }: { children: ReactNode }) {
  const [close, setClose] = useState<boolean>(true);

  function openModal(): void {
    setClose(false);
  }

  function closeModal(): void {
    setClose(true);
  }

  return (
    <modalContext.Provider value={{ close, openModal, closeModal }}>
      {children}
    </modalContext.Provider>
  );
}

export const useModalContext = () => {
  const modalCtx = useContext(modalContext);
  if (!modalCtx) throw new Error('Context value is null');

  return modalCtx;
}