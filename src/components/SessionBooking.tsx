import { useRef, useEffect, type FormEvent } from 'react';

import Input from './UI/Input';
import Button from './UI/Button';
import Modal, { ModalHandle } from './UI/Modal';
import { useSessionDispatch } from '../store/hooks';
import { regSession, SessionType } from '../store/sessionSlice';

interface SessionBookingProps {
  onDone: () => void;
  session: SessionType;
}

export default function SessionBooking({ onDone, session }: SessionBookingProps) {
  const modal = useRef<ModalHandle>(null);
  const dispatch = useSessionDispatch();

  useEffect(() => {
    if (modal.current) {
      modal.current.open();
    }
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    console.log(formData);
    dispatch(regSession(session));
    onDone();
  }

  return (
    <Modal ref={modal} onClose={onDone}>
      <h2>Book Session</h2>
      <form onSubmit={handleSubmit}>
        <Input label="Your name" id="name" name="name" type="text" />
        <Input label="Your email" id="email" name="email" type="email" />
        <p className="actions">
          <Button type="button" textOnly={true} onClick={onDone}>
            Cancel
          </Button>
          <Button>Book Session</Button>
        </p>
      </form>
    </Modal>
  )
}