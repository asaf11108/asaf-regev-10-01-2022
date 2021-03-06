import { createContext } from "react";
import { MenuProps } from "@mui/material/Menu";

type ContextValue = { menuProps: MenuProps; setAnchorEl: (el: HTMLElement | null) => void };

export const MenuContext = createContext<ContextValue>({
  menuProps: {
    open: false,
    anchorEl: null,
    onClose: () => {
      throw Error("MenuContext::menuProps.onClose");
    }
  },
  setAnchorEl: () => {
    throw Error("MenuContext::setAnchorEl");
  }
});