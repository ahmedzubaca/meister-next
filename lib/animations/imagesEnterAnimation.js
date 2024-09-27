'use client'
import { motion } from 'framer-motion';

export default function ImagesEnterAnimation({children, index, delayTiming}) {
  return(    
      <motion.div
        key={index}
        initial={{opacity: 0, translateY: 100}} 
        animate={{opacity: 1, translateY: 0}}
        exit={{opacity: 0.5}}
        transition={{duration: 0.3, delay: index * delayTiming}}       
      >
        {children}
      </motion.div>    
  );
}