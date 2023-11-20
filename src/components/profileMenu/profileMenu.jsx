import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Settings } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Auth } from 'aws-amplify';

function ProfileMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleClick = (event) => {
    // setAnchorEl(event.currentTarget);
    navigate('settings/company-details');
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSettings = () => {
    // Navigate to settings page
    navigate('/settings/company-details');
    handleClose();
  };

  const handleSignOut = () => {
    // Perform sign out action
    if (window.confirm('Are you sure you want to sign out?')) {
      Auth.signOut();
    }
    handleClose();
  };

  return (
    <div>
      <IconButton
        color='inherit'
        aria-label='profile'
        onClick={handleClick}
        size='small'
      >
        <Settings fontSize='large' />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleSettings}>Settings</MenuItem>
        <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
      </Menu>
    </div>
  );
}

export default ProfileMenu;
