import { Link } from 'react-router-dom';
import ThemeToggle from '../ui/ThemeToggle';

// Main Navigation Bar - Minimal design

const Navigation = () => {
  return (
    <nav className="pb-6 mb-6">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold no-underline">
          g0khul
        </Link>

        <div className="flex gap-8 items-center">
          <Link to="/about" className="no-underline text-base transition-opacity hover:opacity-70">
            about
          </Link>
          <Link to="/work" className="no-underline text-base transition-opacity hover:opacity-70">
            work
          </Link>
          <Link to="/thoughts" className="no-underline text-base transition-opacity hover:opacity-70">
            thoughts
          </Link>
          <Link to="/contact" className="no-underline text-base transition-opacity hover:opacity-70">
            contact
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
