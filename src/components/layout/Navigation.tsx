import { Link } from 'react-router-dom';
import ThemeToggle from '../ui/ThemeToggle';

// Main Navigation Bar - Minimal design like Lynn Fisher's site

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          gokhul
        </Link>

        <div className="nav-links">
          <Link to="/about">about</Link>
          <Link to="/work">work</Link>
          <Link to="/thoughts">thoughts</Link>
          <Link to="/contact">contact</Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
