import React from 'react'
import { Box } from "@mui/material";
import UserCard from "./UserCard";
import SidebarNav from './Navigation/SidebarNav';


const Sidebar = () => {
  return (
    <Box sx={{height:'100%',overflow: 'auto',position:'fixed'}}>
      <ul>
        <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-between',height:'90vh'}}>
          <div>
            <SidebarNav />
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
