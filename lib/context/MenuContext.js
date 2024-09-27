'use client'; 
import { createContext, useContext, useState } from 'react';
const MenuContext = createContext();

export function MenuProvider({ children }) {
  
  const [isMenuOpened, setIsMenuOpened] = useState(false);  
  return (
    <MenuContext.Provider value={{ isMenuOpened, setIsMenuOpened }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenuContext() {  
  return useContext(MenuContext);
};