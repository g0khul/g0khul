import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Home Page - Creative hero section like Lynn Fisher's site

const Home = () => {
  return (
    <div className="home-container">
      {/* Main Hero Text */}
      <motion.div
        className="hero-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="hero-name">GOKHUL</h1>
        <h2 className="hero-tagline">
          <span>server-side brain, client-side clarity</span>
        </h2>
      </motion.div>
    </div>
  );
};

export default Home;
