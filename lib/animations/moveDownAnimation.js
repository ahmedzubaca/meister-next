'use client';
import { motion } from 'framer-motion';
import { useMenuContext } from '../context/MenuContext';

export default function MoveDownUpAnimation ({children, className}) {
  const { isMenuOpened } = useMenuContext();
  
  const menuVars = {
    animate: {
      paddingTop: isMenuOpened ? 180 : 50, 
      transition: {
        type: 'spring', 
        stiffness: 150, 
        damping: 26,    
      },
    },
  };

  return(    
    <div>
      {        
        <motion.div
          initial={{paddingTop: 50}}
          animate={menuVars.animate}
          className={className}        
        >
          {children}
        </motion.div>
      }
    </div>  
  )
}