import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      &nbsp; | &nbsp;
      <Link to="/about">About</Link>
      &nbsp; | &nbsp;
      <span>Welcome User</span>
    </nav>
  );
}