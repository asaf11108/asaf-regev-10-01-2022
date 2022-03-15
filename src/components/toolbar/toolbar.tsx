import { FC, useState, MouseEvent, useCallback } from 'react';
import './toolbar.scss';
import { useNavigate, useMatch } from "react-router-dom";
import { Button, IconButton, Menu, MenuItem, Toolbar as MuiToolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { GITHUB_URL, MENU } from './toolbar.config';
import ToolbarTemperatureMode from './toolbar-temperature-mode';
import { useSelector } from 'react-redux';
import { FavoriteLocationSelectors } from '../../store/favorite-locations/favorite-locations.selector';

const Toolbar: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const match = useMatch;

  const favoriteLocations = useSelector(FavoriteLocationSelectors.selectAll);

  const handleClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback((event: MouseEvent<HTMLLIElement>, navigatePath: string) => {
    event.stopPropagation();
    setAnchorEl(null);
    navigate(navigatePath);
  }, []);

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
        <IconButton color="primary" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          <MenuIcon />
        </IconButton>
        <Menu
          className="menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {MENU.map(menuItem => (
            <MenuItem
              onClick={(event) => handleClose(event, menuItem.navigatePath)}
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
