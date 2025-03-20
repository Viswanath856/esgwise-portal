
import React from "react";
import { motion } from "framer-motion";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ 
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1.0]
      }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
