import { createContext } from "react";
import { MenuProps } from "@mui/material/Menu";

type ContextValue = { menuProps: MenuProps; setAnchorEl: (el: HTMLElement | null) => void };

export const MenuContext = createContext<ContextValue>({
  menuProps: {
    open: false,
    anchorEl: null,
    onClose: () => {
      console.log("MenuContext::menuProps.onClose");
    }
  },
  setAnchorEl: () => {
    console.log("MenuContext::setAnchorEl");
  }
});