import { type ReactNode, forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

export type ModalHandle = {
  open: () => void;
}

type ModalProps = {
  onClose: () => void;
  children: ReactNode;
}

const Modal = forwardRef<ModalHandle, ModalProps>(function Modal ({ children, onClose }, ref) {
  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        if (dialog.current) dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="modal" onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById('modal-root')!
  );
});

export default Modal;