import { Link } from 'react-router-dom';
import { socialLinks } from '../../data/social';

// Footer - Minimal design like Lynn Fisher's site

const Footer = () => {
  const reachOutLinks = socialLinks.filter((link) => link.type === 'reach');
  const connectLinks = socialLinks.filter((link) => link.type === 'connect');

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Reach Out Section */}
        <div className="footer-section">
          <p className="footer-label">reach out:</p>
          <div className="footer-links">
            {reachOutLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.platform.toLowerCase()}
              </a>
            ))}
          </div>
        </div>

        {/* Connect Section */}
        <div className="footer-section">
          <p className="footer-label">connect:</p>
          <div className="footer-links">
            {connectLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.platform.toLowerCase()}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Button */}
        <div className="footer-contact">
          <Link to="/contact" className="contact-button">
            get in touch
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
