import { FC, useState, MouseEvent } from 'react';
import './Toolbar.scss';
import { useNavigate, useMatch } from "react-router-dom";
import { Button, IconButton, Menu, MenuItem, Toolbar as MuiToolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { CORS_URL, GITHUB_URL, MENU } from './Toolbar.config';
import ToolbarTemperatureMode from './Toolbar-temperature-mode';

const Toolbar: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const match = useMatch;

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (navigatePath: string) => {
    setAnchorEl(null);
    navigate(navigatePath);
  };

  return (
    <MuiToolbar className="toolbar">
      <span className="toolbar__title">
        <span>Weather Task</span>
        <a href={CORS_URL}>CORS</a>
        <a href={GITHUB_URL}>GitHub</a>
      </span>

      <span className="toolbar__actions">
        <span className="temperature-mode"><ToolbarTemperatureMode /></span>
        {
          MENU.map(menuItem => (
            <Button
              key={menuItem.label}
              style={{ textTransform: 'capitalize' }}
              onClick={() => navigate(menuItem.navigatePath)}
              variant={match(menuItem.navigatePath) ? 'contained' : 'text'}
            >
              {menuItem.label}
            </Button>
          ))
        }
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
          {
            MENU.map(menuItem => (
              <MenuItem
                onClick={() => handleClose(menuItem.navigatePath)}
                key={menuItem.label}
                selected={!!match(menuItem.navigatePath)}
              >
                {menuItem.label}
              </MenuItem>
            ))
          }
          <div className="text-align-center"><ToolbarTemperatureMode /></div>
        </Menu>
      </span >

    </MuiToolbar >
  )
};

export default Toolbar;
