import { motion } from 'framer-motion';

export default function HideNavbarAnimationDiv({ isHidden, children, className }) {
  const variants = {
    hidden: { y: '-150%' },
    visible: { y: '0%' },
  };

  return (
    <motion.div
      animate={isHidden ? 'hidden' : 'visible'}
      variants={variants}
      transition={{ duration: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}