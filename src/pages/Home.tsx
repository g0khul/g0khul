import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { taglineAnimation, taglineTransition } from "../config/animations";

const taglines = [
  "architects servers, polishes frontends",
  "thinks in edge cases",
  "writes logic before layout",
  "keeps APIs clean and UIs sane",
  "thinks in queries, ships in components",
  "ships on fridays (fr)",
  "debugs in production (jk)",
  "runs on curiosity and caffeine",
];

const Home = () => {
  const [currentTagline, setCurrentTagline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center flex-1 gap-6 py-8">
      {/* Main Name */}
      <h1 className="text-[clamp(3rem,12vw,8rem)] font-black tracking-wider leading-none m-0 uppercase">
        GOKHUL
      </h1>

      {/* Playful Subtitle */}
      <p className="text-[clamp(0.875rem,2vw,1.25rem)] opacity-80 m-0">
        (server-side brain, client-side clarity)
      </p>

      {/* Rotating Taglines */}
      <div className="h-8 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentTagline}
            initial={taglineAnimation.initial}
            animate={taglineAnimation.animate}
            exit={taglineAnimation.exit}
            transition={taglineTransition}
            className="text-[clamp(1rem,2.5vw,1.5rem)] font-medium"
          >
            "{taglines[currentTagline]}"
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Home;
