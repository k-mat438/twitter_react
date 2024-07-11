import React from 'react'
import { Grid, Box } from '@mui/material'
import UserPage from '../components/UserPage/UserPage'
import SidebarRight from '../components/SidebarRight/SidebarRight'
import Sidebar from '../components/SidebarLeft/Sidebar'
const Profile = (props) => {
  const { user } = props;
  return (
    <Grid container spacing={2} sx={{height: '100vh'}}>
      <Grid item xs={3}>
        <Sidebar user={user}/>
      </Grid>
      <Grid item xs={9}>
        <Box sx={{display:'flex'}}>
          <UserPage />
          <SidebarRight />
        </Box>
      </Grid>
    </Grid>    
  )
}

export default Profile
