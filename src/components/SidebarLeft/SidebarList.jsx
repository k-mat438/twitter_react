import React, { useState, useEffect } from 'react'
import { SidebarData } from "./SidebarData";
import { Box, Button } from "@mui/material";
import { IconContext } from 'react-icons/lib';
import { BsTwitterX } from "react-icons/bs";
import Cookies from "js-cookie"

const SidebarList = () => {
  const [selected, setSelected] = useState(() => {
    return Cookies.get('sidebarSelected') || '';
  });

  useEffect(() => {
    // 初期選択状態をURLに基づいて設定
    const path = window.location.pathname;
    const initialSelected = SidebarData.find(item => item.link === path)?.tittle || '';
    setSelected(initialSelected);
  }, []);

  const handleItemClick = (tittle, link) => {
    setSelected(tittle);
    Cookies.set('sidebarSelected', tittle);
    window.location.pathname = link;
  };

  return (
    <>
      <Box sx={{padding:'15px' }}>
        <IconContext.Provider value={{size: '27px'}}><BsTwitterX /></IconContext.Provider>
      </Box>
      {SidebarData.map((value, key) => (
        <Box
          key={key}
          component="li" 
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: '15px',
            borderRadius:'2rem',
            cursor: 'pointer',
            '&:hover': {backgroundColor: '#212121'},
          }}
          onClick={() => handleItemClick(value.tittle, value.link)}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
            <IconContext.Provider value={{size: '27px'}}>{value.icon}</IconContext.Provider>
          </Box>
          <Box sx={{
            fontSize:'20px', 
            fontWeight: selected === value.tittle ? 'bold' : 'normal'
          }}>
            {value.tittle}
          </Box>
        </Box>
      ))}
      <Button 
        sx={{
          width:'235px',
          height:'50px',
          borderRadius:'2rem',
          marginTop:'15px',
          fontWeight:'bold',
          fontSize:'17px',
          backgroundColor: '#1da1f2'
        }} 
        variant="contained"
      >
        Post
      </Button>
    </>
  )
}

export default SidebarList
