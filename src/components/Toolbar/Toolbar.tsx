import React from 'react';
import './Toolbar.scss';
import { useNavigate, useMatch } from "react-router-dom";
import { Button, IconButton, Menu, MenuItem, Toolbar as MuiToolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface IMenuItem {
  label: string;
  navigatePath: string
};

const Toolbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const match = useMatch;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (navigatePath: string) => {
    setAnchorEl(null);
    navigate(navigatePath);
  };

  const menuItems: IMenuItem[] = [
    {
      label: 'Home',
      navigatePath: '/'
    },
    {
      label: 'Favorites',
      navigatePath: '/favorites'
    }
  ];

  return (
    <MuiToolbar className="toolbar">
      <span className="toolbar__title">
        <span>Herolo Weather Task</span>
        <a href="https://cors-anywhere.herokuapp.com/corsdemo">CORS</a>
        <a href="https://asaf11108.github.io/asaf-regev-06-03-2021/">GitHub</a>
      </span>

      <span className="toolbar__actions">
        {
          menuItems.map((menuItem, index) => (
            <Button
              key={index}
              style={{ textTransform: 'capitalize' }}
              onClick={() => navigate(menuItem.navigatePath)}
              variant={match(menuItem.navigatePath) ? 'contained' : 'text'}
            >
              {menuItem.label}
            </Button>
          ))
        }
      </span>

      <span className="toolbar__actions--mobile">
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
            menuItems.map((menuItem, index) => (
              <MenuItem
                onClick={() => handleClose(menuItem.navigatePath)}
                key={index}
                selected={!!match(menuItem.navigatePath)}
              >
                {menuItem.label}
              </MenuItem>
            ))
          }
        </Menu>
      </span >

    </MuiToolbar >
  )
};

export default Toolbar;
