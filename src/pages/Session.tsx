import { useState } from 'react';
import { useParams } from 'react-router-dom';

import SessionBooking from '../components/SessionBooking';
import Button from '../components/UI/Button';
import { SESSIONS } from '../dummy-sessions';

export default function SessionPage() {
  const [close, setClose] = useState<boolean>(true);
  const params = useParams<{ id: string }>();

  const sessionId = params.id;
  const loadedSession = SESSIONS.find((session) => session.id === sessionId);

  if (!loadedSession) {
    return (
      <main id="session-page">
        <p>No session found!</p>
      </main>
    );
  }

  function handleOpen() {
    setClose(false);
  }

  function handleClose() {
    setClose(true);
  }

  return (
    <main id="session-page">
      {!close && <SessionBooking session={loadedSession} onDone={handleClose} />}
      <article>
        <header>
          <img
            src={loadedSession.image}
            alt={loadedSession.title}
          />
          <div>
            <h2>{loadedSession.title}</h2>
            <time dateTime={new Date(loadedSession.date).toISOString()}>
              {new Date(loadedSession.date).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </time>
            <p>
              <Button onClick={handleOpen}>Book Session</Button>
            </p>
          </div>
        </header>
        <p id="content">{loadedSession.description}</p>
      </article>
    </main>
  );
}
