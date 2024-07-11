import React from 'react'
import { Box } from "@mui/material";
import UserCard from "./UserCard";
import SidebarList from './SidebarList';


const Sidebar = () => {
  return (
    <Box sx={{height:'100%',overflow: 'auto',position:'fixed'}}>
      <ul>
        <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-between',height:'90vh'}}>
          <div>
            <SidebarList />
          </div>
          <div>
            <UserCard />
          </div>
        </Box>
      </ul>
    </Box>
  )
}

export default Sidebar
