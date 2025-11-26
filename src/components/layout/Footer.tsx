import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { socialLinks } from "../../data/social";
import {
  hoverAnimation,
  tapAnimation,
  itemTransition,
} from "../../config/animations";

const Footer = () => {
  const reachOutLinks = socialLinks.filter((link) => link.type === "reach");
  const connectLinks = socialLinks.filter((link) => link.type === "connect");

  return (
    <footer className="mt-auto pt-8">
      <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
        <div className="flex flex-col gap-2">
          <p className="text-sm opacity-70 m-0">reach out:</p>
          <div className="flex gap-6 flex-wrap">
            {reachOutLinks.map((link) => (
              <motion.a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline text-base"
                whileHover={hoverAnimation}
                whileTap={tapAnimation}
                transition={itemTransition}
              >
                {link.platform.toLowerCase()}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sm opacity-70 m-0">connect:</p>
          <div className="flex gap-6 flex-wrap">
            {connectLinks.map((link) => (
              <motion.a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline text-base"
                whileHover={hoverAnimation}
                whileTap={tapAnimation}
                transition={itemTransition}
              >
                {link.platform.toLowerCase()}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="w-full md:w-auto md:ml-auto">
          <motion.div
            whileHover={hoverAnimation}
            whileTap={tapAnimation}
            transition={itemTransition}
          >
            <Link
              to="/contact"
              className="block md:inline-block text-center py-2 px-6 border-2 border-current no-underline text-base hover:opacity-70 transition-opacity"
            >
              get in touch
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
