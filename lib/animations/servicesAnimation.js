'use client'
import { motion } from 'framer-motion';

export default function ServicesAnimation({children, index, screenWidth}) {
  const isLeft = (index === 0 || index === 1) ? true : false;
  const delay = (index === 1 || index === 2) ? 0 : 1;
  const delayMob = (index === 0 || index === 1) ? 0 : 1;
  let initial = screenWidth > 500 ? {opacity: 0, translateX: isLeft ? -100 : 100} 
      : {opacity: 0, translateX: -100 };
  let transition = screenWidth > 500 ? {duration: 0.3, delay: delay * 0.3}
    : {duration: 0.3, delay: delayMob * 0.3};

  return(    
      <motion.div
        key={index}
        initial={initial } 
        animate={{opacity: 1, translateX: 0}}
        exit={{opacity: 0.5}}
        transition={transition}       
      >
        {children}
      </motion.div>    
  );
}