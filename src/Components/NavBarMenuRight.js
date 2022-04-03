import * as React from 'react'
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import {useNavigate} from "react-router-dom";


const NavBarMenuRight = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  let navigate = useNavigate();

return (
<>
<IconButton
  size="large"
  aria-label="account of current user"
  aria-controls="menu-appbar"
  aria-haspopup="true"
  onClick={handleMenu}
  color="inherit"
>
  <AccountCircle />
  <ArrowDropDownIcon />
</IconButton>
<Menu
  id="menu-appbar"
  anchorEl={anchorEl}
  anchorOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }}
  keepMounted
  transformOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }}
  open={Boolean(anchorEl)}
  onClose={handleClose}
>
  <MenuItem onClick={ () => {
    handleClose();
    navigate("/profile");
  }}>My Profile</MenuItem>
  <MenuItem onClick={handleClose}>Logout</MenuItem>
</Menu>
</>
)
}

export default NavBarMenuRight;
