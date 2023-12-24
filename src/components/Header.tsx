import { NavLink } from 'react-router-dom';

import Button from './UI/Button';

export default function Header() {
  return (
    <div id="main-header">
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
             <Button>Upcoming Sessions</Button>
          </li>
       </ul>
      
      </nav>
    </div>
  )
}