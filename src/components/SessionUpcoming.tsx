import { useRef, useEffect } from 'react';

import SessionUpcomingItem from './SessionUpcomingItem';
import { useSessionSelector, useSessionDispatch } from '../store/hooks';
import { cancelSession } from '../store/sessionSlice';
import Button from './UI/Button.tsx';
import Modal, { ModalHandle } from './UI/Modal';

interface SessionUpcomingProps {
  onClose: () => void;
}

export default function SessionUpcoming({ onClose }: SessionUpcomingProps) {
  const modal = useRef<ModalHandle>(null);
  const sessions = useSessionSelector(state => state.session.sessions);
  const dispatch = useSessionDispatch();

  useEffect(() => {
    if (modal.current) {
      modal.current.open();
    }
  }, []);

  function cancel(id) {
    dispatch(cancelSession(id));
  }

  return (
    <Modal ref={modal} onClose={onClose}>
      {sessions.length == 0 && <p>You have not registered any session</p>}
      {sessions.map(session => (
        <SessionUpcomingItem 
          key={session.id} 
          session={session} 
          onCancel={cancel.bind(null, session.id)} 
        />
      ))}
      <p className="actions">
        <Button onClick={onClose}>Close</Button>
      </p>
    </Modal>
  );
}