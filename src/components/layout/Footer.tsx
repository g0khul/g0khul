import { Link } from 'react-router-dom';
import { socialLinks } from '../../data/social';

// Footer - Minimal design

const Footer = () => {
  const reachOutLinks = socialLinks.filter((link) => link.type === 'reach');
  const connectLinks = socialLinks.filter((link) => link.type === 'connect');

  return (
    <footer className="mt-auto pt-8">
      <div className="flex gap-12 flex-wrap items-start">
        {/* Reach Out Section */}
        <div className="flex flex-col gap-2">
          <p className="text-sm opacity-70 m-0">reach out:</p>
          <div className="flex gap-6 flex-wrap">
            {reachOutLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline text-base transition-opacity hover:opacity-70"
              >
                {link.platform.toLowerCase()}
              </a>
            ))}
          </div>
        </div>

        {/* Connect Section */}
        <div className="flex flex-col gap-2">
          <p className="text-sm opacity-70 m-0">connect:</p>
          <div className="flex gap-6 flex-wrap">
            {connectLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline text-base transition-opacity hover:opacity-70"
              >
                {link.platform.toLowerCase()}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Button */}
        <div className="ml-auto">
          <Link
            to="/contact"
            className="inline-block py-2 px-6 border-2 border-current no-underline text-base transition-opacity hover:opacity-70 rounded-none"
          >
            get in touch
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
