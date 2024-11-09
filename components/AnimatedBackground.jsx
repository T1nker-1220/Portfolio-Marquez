import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Your MotionComponents with initial static positions */}
      <motion.div
        className="absolute w-[20vw] h-[20vw] rounded-full bg-gradient-to-r from-[#00DC82]/50"
        initial={{ left: "0%", top: "0%" }}
        animate={{
          left: ["0%", "30%", "60%", "30%", "0%"],
          top: ["0%", "30%", "60%", "30%", "0%"]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      {/* Repeat for other motion divs */}
    </>
  );
} 