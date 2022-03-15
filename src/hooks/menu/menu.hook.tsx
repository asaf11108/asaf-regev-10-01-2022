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
    (event: MouseEvent<HTMLElement>) => {
      event.stopPropagation();
      const target = event.currentTarget;
      setAnchorEl(target);
    },
    [setAnchorEl]
  );

  const closeMenu = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      event.stopPropagation();
      setAnchorEl(null);
    },
    [setAnchorEl]
  );

  return {
    Menu,
    openMenu,
    closeMenu
  };
};
