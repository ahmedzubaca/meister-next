'use client'
import { motion } from 'framer-motion';

export default function ServicesAnimation({children, index}) {
const isLeft = (index === 0 || index === 1) ? true : false;
const animationDelay = (index === 1 || index === 2) ? 0 : 1;

  return(    
      <motion.div
        key={index}
        initial={{opacity: 0, translateX: isLeft ? -100 : 100}} 
        animate={{opacity: 1, translateX: 0}}
        exit={{opacity: 0.5}}
        transition={{duration: 0.3, delay: animationDelay * 0.3}}       
      >
        {children}
      </motion.div>    
  );
}