import React from 'react'
import { Box } from "@mui/material";
import xLogo from '../..//x-logo2.png';
import { BsThreeDots } from "react-icons/bs";

const Profile = (props) => {
  const { user } = props;
  return (
    <>
      <Box sx={{display:'flex',borderRadius:'2rem',alignItems: 'center','&:hover': {backgroundColor: '#212121'}}}>
        <img src={xLogo} alt="X Logo" style={{width:'50px',height:'50px',borderRadius:'50%'}}/>
        <Box sx={{display:'flex',flexDirection:'column'}}>
          <span style={{fontWeight:'bold'}}>{user.name}</span>
          <span style={{color:'#71767A'}}>@unique_name</span>
        </Box>
        <Box sx={{marginLeft:'auto',padding:'10px'}}><BsThreeDots /></Box>
      </Box>
    </>
  )
}

export default Profile
