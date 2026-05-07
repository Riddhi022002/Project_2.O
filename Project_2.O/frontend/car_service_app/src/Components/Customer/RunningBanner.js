import { motion } from "framer-motion";
import "../../StyleSheets/Customer/RunningBanner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      {/* CAR */}
      <motion.h1
        className="text"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatDelay: 2, // gap before next cycle
        }}
      >
        CAR
      </motion.h1>

      {/* CAR IMAGE */}
      <motion.img
        src="/assets/carwash.png"
        className="car-image"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          delay: 0.6,
          duration: 0.5,
          repeat: Infinity,
          repeatDelay: 2,
        }}
      />

      {/* WASH */}
      <motion.h1
        className="text"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.3,
          duration: 0.5,
          repeat: Infinity,
          repeatDelay: 2,
        }}
      >
        WASH
      </motion.h1>
    </div>
  );
};

export default Banner;
