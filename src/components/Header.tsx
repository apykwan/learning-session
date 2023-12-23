import { NavLink } from 'react-router-dom';

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
            <NavLink to="/error">Upcoming Sessions</NavLink>
          </li>
       </ul>
      </nav>
    </div>
  )
}