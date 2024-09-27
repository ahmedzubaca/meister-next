'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../cssModules/customLink.module.css';

export default function CustomLink({ navItem, togleMenu, handleNavBarBackground}) {
  const pathname = usePathname();
  const path = pathname || '';
  const isActive = navItem.route === "/" 
    ? path === navItem.route 
    : path.startsWith(navItem.route);

  const handleLinkClick = () => {    
    if (handleNavBarBackground) {
      handleNavBarBackground(false);
    }
    if (togleMenu) {
      togleMenu(); 
    }
    window.scrollTo(0,0)         
  } 
  
  return (  
    <li className={styles.menuItem}>       
      <Link href={navItem.route} 
        className={`${styles.menuItemLink} ${isActive ? styles.active : ""} `} 
        onClick={handleLinkClick}           
      >
        {navItem.name}
      </Link>      
    </li>
  )  
}