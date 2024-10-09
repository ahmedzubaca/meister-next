'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import meisterLogo from '@/public/navbarIcons/meister-logo.png';
import { motion, useMotionValueEvent, useScroll, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { AiOutlineMenu } from 'react-icons/ai';
import useWindowSize from '../helper/useWindowSize';
import CustomLink from './CustomLink';
import FbInstagram from "./FbInstagram";
import { navItems } from '../helper/navItems';
import { useMenuContext } from '@/lib/context/MenuContext';
import HideNavbarAnimationDiv from '@/lib/animations/hidingNavbarAnimation';
import styles from '../cssModules/navbar.module.css';

export default function Navbar() {

  const windowSize = useWindowSize();
  const { isMenuOpened, setIsMenuOpened } = useMenuContext();
  const [hasNavBackground, setHasNavBackground] = useState();  
  const [isHidden, setIsHidden] = useState(false);
  const [isClickable, setIsClickable] = useState(true);
  const {scrollY} = useScroll();
  const lastYRef = useRef(0);  

  const togleMenu = () => {    
    setIsMenuOpened((prev) => !prev)
  };

  const handleMeisterLogoClick = () => {
    setHasNavBackground(false);
    setIsMenuOpened(false);
    window.scrollTo(0, 0)
  }

  const handleNavBarBackground = (fromLink) => {    
    setHasNavBackground(fromLink)
  window.scrollTo(0, 0)
  }
      
  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 50) {
      const scrollingDown = difference > 0;
      setIsHidden(scrollingDown);
      if (y < 50) {
        setHasNavBackground(false);
      } else {
        setHasNavBackground(!scrollingDown);
      }
      if(!hasNavBackground)
        setIsMenuOpened(false);
      lastYRef.current = y;
    }      
  });

  const y = useMotionValue(-80);
  const opacity = useTransform(y, [-80, -20, 0, 10], !hasNavBackground ? [0, 0, 0.5, 1] : [0, 0.5, 1, 1] );
  const menuVars = {
    initial: {
      y: -80,     
    },
    animate: {
      y: hasNavBackground ? 0 : 15,      
      transition: {
        duration: 0.5,        
      },
    },
    exit: {
      y: -150,      
      transition: {        
        duration: 0.8,        
      },
    },
  };  
  
  return(
    windowSize.width !== undefined && (
    <nav className={`${styles.container} ${hasNavBackground ? styles.containerBackground : ''}`} > 
      {
        windowSize.width <= 900
        ? 
        <>
          <HideNavbarAnimationDiv isHidden={isHidden} className={styles.logoMenueMediaContainer}>   
            <div className={styles.menuContainer}>            
              <AiOutlineMenu className={styles.menu} onClick={togleMenu} />
            </div>
            <div className={styles.logoContainer}>
            <Link href='/'>
              <Image className={styles.logo} src={meisterLogo} alt="logo" priority
                onClick={() => handleMeisterLogoClick()}
              />
            </Link> 
            </div> 
            <div className={styles.socialMediaContainer}>
              <FbInstagram />
            </div>
          </HideNavbarAnimationDiv>
          <AnimatePresence initial={false}>
            {
            isMenuOpened && (
              <motion.ul                
                variants={menuVars}
                initial="initial"
                animate="animate"
                exit="exit"
                style={{
                  y, 
                  opacity, 
                  pointerEvents: isClickable ? 'auto' : 'none'}}
                className={`${isMenuOpened ? styles.linksContainerOnMenueClick :  styles.menuClosed} ${
                  isMenuOpened && hasNavBackground ? styles.linksContainerOnMenueClickBackground : ''
                  }`}
                onAnimationStart={() => setIsClickable(false)} 
                onAnimationComplete={() => setIsClickable(true)} 
              >         
                {
                  navItems.map((item, index) => (
                    <CustomLink key={index} 
                                navItem={item}
                                togleMenu={togleMenu}
                                handleNavBarBackground={handleNavBarBackground}
                                className={isMenuOpened ? styles.menuClosed : ''} />
                  ))
                }
              </motion.ul>
            )
          }
        </AnimatePresence>         
        </>
        :     
        <HideNavbarAnimationDiv isHidden={isHidden} className={styles.logoMenueMediaContainer} >
          <div className={styles.logoContainer}>
            <Link href='/'>
              <Image className={styles.logo} src={meisterLogo} alt="logo" /> 
            </Link>
          </div>
          <ul className={styles.linksContainer}>
            {
              navItems.map((item, index) => (
                <CustomLink key={index} navItem={item} />    
            ))         
            }
            </ul> 
            <div className={styles.socialMediaContainer}>
              <FbInstagram />
            </div>
            </HideNavbarAnimationDiv>
        }
      </nav>
    )
  )
}