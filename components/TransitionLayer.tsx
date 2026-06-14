"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface TransitionLayerProps {
  duration?: number;
  direction?: "top" | "bottom"; // choose animation origin
}

const TransitionLayer = ({ duration = 0.6, direction = "top" }: TransitionLayerProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), duration * 1000);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0 }}
      style={{ originY: direction === "top" ? 0 : 1 }}
      transition={{ duration, ease: [0.70, 0, 0.44, 1] }}
      className="fixed top-0 left-0 w-full h-full bg-white z-50"
    />
  );
};

export default TransitionLayer;
