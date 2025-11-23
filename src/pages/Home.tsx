import { motion } from "framer-motion";

// Home Page - Creative hero section

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-full gap-12 py-8">
      {/* Main Hero Text */}
      <div className="text-center my-8">
        <h1 className="text-[clamp(3rem,12vw,8rem)] font-black tracking-wider leading-tight m-0 uppercase">
          GOKHUL
        </h1>
        <h1 className="text-[clamp(1.5rem,4vw,3rem)] font-bold tracking-wide leading-snug mt-4 mb-0 uppercase">
          <span className="block">server-side brain, client-side clarity</span>
        </h1>
      </div>
    </div>
  );
};

export default Home;
