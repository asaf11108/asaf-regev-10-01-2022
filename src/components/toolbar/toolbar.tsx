import { VFC } from "react";
import { useNavigate, useMatch } from "react-router-dom";
import { IconButton, MenuItem, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { GITHUB_URL, MENU } from "./toolbar.config";
import ToolbarTemperatureMode from "./toolbar-temperature-mode";
import { useSelector } from "react-redux";
import { FavoriteLocationSelectors } from "../../store/favorite-locations/favorite-locations.selector";
import { useMenu } from "../../providers/menu/menu.hook";
import * as S from "./toolbar.style";
import { media } from "../../styles/vendors/media";

const Toolbar: VFC = () => {
  const navigate = useNavigate();
  const match = useMatch;
  const { Menu, openMenu, closeMenu } = useMenu();
  const matches = useMediaQuery(media.up("sm"));

  const favoriteLocations = useSelector(FavoriteLocationSelectors.selectAll);

  const onMenuItemClick = (navigatePath: string) => {
    closeMenu();
    navigate(navigatePath);
  };

  return (
    <S.Toolbar>
      <S.Title>
        <span>Weather Task</span>
        <a href={GITHUB_URL}>GitHub</a>
      </S.Title>

      {matches ? (
        <span>
          <ToolbarTemperatureMode style={{ marginRight: '20px' }}/>
          {MENU.map((menuItem) => (
            <S.Button
              key={menuItem.label}
              style={{ textTransform: "capitalize" }}
              onClick={() => navigate(menuItem.navigatePath)}
              variant={match(menuItem.navigatePath) ? "contained" : "text"}
              disabled={menuItem.disabled?.(favoriteLocations)}
            >
              {menuItem.label}
            </S.Button>
          ))}
        </span>
      ) : (
        <span>
          <IconButton
            color="primary"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={openMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu>
            {MENU.map((menuItem) => (
              <MenuItem
                onClick={() => onMenuItemClick(menuItem.navigatePath)}
                key={menuItem.label}
                selected={!!match(menuItem.navigatePath)}
                disabled={menuItem.disabled?.(favoriteLocations)}
              >
                {menuItem.label}
              </MenuItem>
            ))}
            <div style={{ textAlign: "center" }}>
              <ToolbarTemperatureMode />
            </div>
          </Menu>
        </span>
      )}
    </S.Toolbar>
  );
};

export default Toolbar;
