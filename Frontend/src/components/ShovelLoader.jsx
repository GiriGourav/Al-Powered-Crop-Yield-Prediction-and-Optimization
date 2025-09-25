import React from "react";
import { motion } from "framer-motion";

const ShovelLoader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="relative w-24 h-24">
        {/* Ground */}
        <div className="absolute bottom-0 w-full h-2 bg-gray-400 rounded"></div>

        {/* Shovel */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 bottom-2"
          animate={{
            rotate: [-20, -60, -20], // swinging motion
            y: [0, -10, 0], // hitting motion
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          {/* Shovel handle */}
          <div className="w-1 h-12 bg-gray-700 rounded-full mx-auto"></div>
          {/* Shovel blade */}
          <div className="w-6 h-4 bg-gray-500 rounded-b-full mx-auto -mt-1"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default ShovelLoader;
