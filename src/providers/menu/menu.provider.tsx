import { useState } from "react";
import { FCC } from "../../interfaces/general";
import { MenuContext } from "./menu.context";

export const MenuProvider: FCC = ({ children }) => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  
    return (
      <MenuContext.Provider
        value={{
          menuProps: {
            anchorEl,
            open: Boolean(anchorEl),
            onClose: () => setAnchorEl(null)
          },
          setAnchorEl: (el: HTMLElement | null) => setAnchorEl(el)
        }}
      >
        {children}
      </MenuContext.Provider>
    );
  };