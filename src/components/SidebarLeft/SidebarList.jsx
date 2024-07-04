import React from 'react'
import { SidebarData } from "./SidebarData";
import { Box, Button } from "@mui/material";
import { IconContext } from 'react-icons/lib';
import { BsTwitterX } from "react-icons/bs";

const SidebarList = () => {
  return (
    <>
      <Box sx={{padding:'15px' }}>
        <IconContext.Provider value={{size: '27px'}}><BsTwitterX /></IconContext.Provider>
      </Box>
      {SidebarData.map((value, key) => {
        return (
          <Box key={key} component="li" 
            sx={{display: 'flex',alignItems: 'center',padding: '15px',borderRadius:'2rem',cursor: 'pointer','&:hover': {backgroundColor: '#212121',},}}
            onClick={() => {window.location.pathname = value.link}}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
              <IconContext.Provider value={{size: '27px'}}>{value.icon}</IconContext.Provider>
            </Box>
            <Box sx={{fontSize:'20px'}}>{value.tittle}</Box>
          </Box>
        )})}
        <Button sx={{width:'235px',height:'50px',borderRadius:'2rem',marginTop:'15px',fontWeight:'bold',fontSize:'17px',backgroundColor: '#1da1f2' }} variant={'contained'}>Post</Button>
    </>
  )
}

export default SidebarList
