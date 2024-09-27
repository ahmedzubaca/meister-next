'use client';
import { motion, AnimatePresence } from 'framer-motion';

export default function ImageTransition ({ children, direction, index }) {
  
  const variants = {
    enter: (direction) => ({
      clipPath: direction > 0 ? 'inset(0 0 0 100%)' : 'inset(0 100% 0 0)', // Different starting clip-path based on direction
      opacity: 0
    }),
    center: {
      clipPath: 'inset(0 0 0 0)', // Fully revealed
      opacity: 1
    },
    exit: (direction) => ({
      clipPath: direction > 0 ? 'inset(0 100% 0 0)' : 'inset(0 0 0 100%)', // Clip out in the opposite direction
      opacity: 0
    }),
  };

  return(    
        <motion.div
          key={index}         
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{duration: 0.4}}
        >
          {children}
        </motion.div>      
  )
}