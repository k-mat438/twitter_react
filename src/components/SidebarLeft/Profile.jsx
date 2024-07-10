import React, { useState } from 'react';
import { Avatar, Box, IconButton, Menu, MenuItem } from "@mui/material";
import { BsThreeDots } from "react-icons/bs";
import { useAuth } from '../../contexts/AuthContext';
import xLogo from '../../x-logo.png';
import { logOutInstance } from '../../axios/instance';
import Cookies from "js-cookie"

const Profile = () => {
  const { user } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = async() => {
    await logOutInstance().then((result) => {
      console.log(result)
      if (result.success) {
        Cookies.remove("_access_token")
        Cookies.remove("_client")
        Cookies.remove("_uid")
        window.location.reload();
      }
    })
  }

  return (
    <Box sx={{ display: 'flex', borderRadius: '2rem', alignItems: 'center', '&:hover': { backgroundColor: '#212121' } }}>
      <Avatar src={xLogo} />
      <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
        <span style={{ fontWeight: 'bold' }}>{user ? user.name : null}</span>
        <span style={{ color: '#71767A' }}>@unique_name</span>
      </Box>
      <Box sx={{ marginLeft: 'auto', padding: '10px' }}>
        <IconButton
          onClick={handleClick}
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <BsThreeDots style={{color:'#fff'}}/>
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{ 'aria-labelledby': 'basic-button' }}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleSignOut}>Logout</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default Profile;
