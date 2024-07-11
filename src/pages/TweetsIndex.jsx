import { Grid, Box } from '@mui/material';
import '../styles/TweetIndex.css';
import Sidebar from '../components/SidebarLeft/Sidebar';
import MainContent from '../components/MainContents/MainContent';
import SidebarRight from '../components/SidebarRight/SidebarRight';
import { useAuth } from '../contexts/AuthContext';
import { BsTwitterX } from "react-icons/bs";


const TweetsIndex = () => {
  const { loading } = useAuth()

  return (
    <>
     {loading ? 
      <Box sx={{display:'flex',justifyContent:'center',fontSize:'50px'}}>
        <BsTwitterX />
      </Box>
       : 
    <Grid container spacing={2} sx={{height: '100vh'}}>
      <Grid item xs={3}>
        <Sidebar />
      </Grid>
      <Grid item xs={9}>
        <Box sx={{display:'flex'}}>
          <MainContent />
          <SidebarRight />
        </Box>
      </Grid>
    </Grid>   
} 
    </>
   
  )
}

export default TweetsIndex