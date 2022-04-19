import { useContext, useCallback, MouseEvent, FC } from "react";
import { MenuProps, Menu as MuiMenu } from "@mui/material";
import { MenuContext } from "./menu.context";

const Menu: FC<Omit<MenuProps, "open" | "anchorEl" | "onClose">> = (props) => {
  const { menuProps } = useContext(MenuContext);

  return <MuiMenu {...menuProps} {...props} />;
};

export const useMenu = () => {
  const { setAnchorEl } = useContext(MenuContext);

  const openMenu = useCallback(
    (event: MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget),
    [setAnchorEl]
  );

  const closeMenu = useCallback(
    () => setAnchorEl(null),
    [setAnchorEl]
  );

  return {
    Menu,
    openMenu,
    closeMenu
  };
};
