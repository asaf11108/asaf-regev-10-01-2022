import { useState, useCallback, useMemo, MouseEvent } from "react";
import { MenuProps } from "@mui/material/Menu";

export const useMenu = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const openMenu = useCallback((event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const closeMenu = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const menuProps = useMemo((): MenuProps => {
    return {
      anchorEl,
      open: Boolean(anchorEl),
      onClose: closeMenu
    };
  }, [anchorEl, closeMenu]);

  return {
    openMenu,
    closeMenu,
    menuProps
  };
};
