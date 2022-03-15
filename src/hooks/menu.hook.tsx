import { MenuProps, Menu as MuiMenu } from "@mui/material";
import { useState, useCallback, useMemo, MouseEvent, FC } from "react";

export const useMenu = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const openMenu = useCallback((event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const closeMenu = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const Menu = useMemo(() => {
    const MenuComponent: FC<Omit<MenuProps, "open" | "anchorEl" | "onClose">> = ({ children, ...props }) => {
        return (
          <MuiMenu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={closeMenu} {...props}>
            {children}
          </MuiMenu>
        );
      };
      return MenuComponent;
  }, [anchorEl, closeMenu]);

  return {
    Menu,
    openMenu,
    closeMenu
  };
};
