import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import SessionUpcoming from './SessionUpcoming';
import Button from './UI/Button';

export default function Header() {
  const [upcomingSessionsVisible, setUpcomingSessionsVisible] = useState(false);

  function showUpcomingSessions() {
    setUpcomingSessionsVisible(true);
  }

  function hideUpcomingSessions() {
    setUpcomingSessionsVisible(false);
  }

  return (
    <div id="main-header">
      {upcomingSessionsVisible && <SessionUpcoming onClose={hideUpcomingSessions} />}
      <h1>ReactMentoring</h1>
      <nav>
       <ul>
         <li>
            <NavLink to="/">Our Mission</NavLink>
          </li>
          <li>
            <NavLink to="/sessions">Browse Sessions</NavLink>
          </li>
          <li>
             <Button onClick={showUpcomingSessions}>Upcoming Sessions</Button>
          </li>
       </ul>
      
      </nav>
    </div>
  )
}