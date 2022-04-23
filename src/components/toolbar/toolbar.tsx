import { VFC } from 'react';
import './toolbar.scss';
import { useNavigate, useMatch } from "react-router-dom";
import { Button, IconButton, MenuItem, Toolbar as MuiToolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { GITHUB_URL, MENU } from './toolbar.config';
import ToolbarTemperatureMode from './toolbar-temperature-mode';
import { useSelector } from 'react-redux';
import { FavoriteLocationSelectors } from '../../store/favorite-locations/favorite-locations.selector';
import { useMenu } from '../../providers/menu/menu.hook';

const Toolbar: VFC = () => {
  const navigate = useNavigate();
  const match = useMatch;
  const { Menu, openMenu, closeMenu } = useMenu();

  const favoriteLocations = useSelector(FavoriteLocationSelectors.selectAll);

  const onMenuItemClick = (navigatePath: string) => {
    closeMenu();
    navigate(navigatePath);
  };

  return (
    <MuiToolbar className="toolbar">
      <span className="toolbar__title">
        <span>Weather Task</span>
        <a href={GITHUB_URL}>GitHub</a>
      </span>

      <span className="toolbar__actions">
        <span className="temperature-mode"><ToolbarTemperatureMode /></span>
        {MENU.map(menuItem => (
          <Button
            key={menuItem.label}
            style={{ textTransform: 'capitalize' }}
            onClick={() => navigate(menuItem.navigatePath)}
            variant={match(menuItem.navigatePath) ? 'contained' : 'text'}
            disabled={menuItem.disabled?.(favoriteLocations)}
          >
            {menuItem.label}
          </Button>
        ))}
      </span>

      <span className="toolbar__actions-mobile">
        <IconButton color="primary" aria-controls="simple-menu" aria-haspopup="true" onClick={openMenu}>
          <MenuIcon />
        </IconButton>
        <Menu
          className="menu"
          keepMounted
        >
          {MENU.map(menuItem => (
            <MenuItem
              onClick={() => onMenuItemClick(menuItem.navigatePath)}
              key={menuItem.label}
              selected={!!match(menuItem.navigatePath)}
              disabled={menuItem.disabled?.(favoriteLocations)}
            >
              {menuItem.label}
            </MenuItem>
          ))}
          <div style={{textAlign: 'center'}}><ToolbarTemperatureMode /></div>
        </Menu>
      </span >

    </MuiToolbar >
  )
};

export default Toolbar;
