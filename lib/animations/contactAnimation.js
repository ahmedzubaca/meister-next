'use client'
import { motion } from 'framer-motion';

export default function ContactAnimation({children, className, isLeft}) {  
  return(    
      <motion.div
        className={className}        
        initial={{opacity: 0, translateX: isLeft ? -100 : 100} } 
        animate={{opacity: 1, translateX: 0}}
        exit={{opacity: 0.5}}
        transition={{duration: 0.5}}       
      >
        {children}
      </motion.div>    
  );
}