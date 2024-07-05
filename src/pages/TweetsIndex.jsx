import { Grid, Box, TextField, Button } from '@mui/material';
import '../styles/TweetIndex.css';
import Sidebar from '../components/SidebarLeft/Sidebar';
import MainContent from '../components/MainContents/MainContent';
import { IoIosSearch } from "react-icons/io";

const TweetsIndex = (props) => {
  const { user } = props;
  
  return (
    <Grid container spacing={2} sx={{height: '100vh'}}>
      <Grid item xs={3}>
        <Sidebar user={user}/>
      </Grid>

      <Grid item xs={6} sx={{borderLeft: '1px solid #2f3336',borderRight: '1px solid #2f3336'}}>
        <MainContent />
      </Grid>

      <Grid item xs={3}>
        <Box sx={{ height: '100vh', overflow: 'auto' }}>
          <Box sx={{ position: 'fixed', width: 'inherit',backgroundColor:"#16181c" }}>
            <Box sx={{ display: 'flex', alignItems: 'center', border: '1px solid #2f3336', borderRadius: '2rem' }}>
              <IoIosSearch />
              <TextField label="With sx" variant="standard" />
            </Box>
          </Box>
          <Box sx={{ marginTop: '80px' }}> {/* Ensure this value is large enough to clear the fixed content */}
            <Box sx={{ border: '1px solid #2f3336', borderRadius: '2rem', padding: "14px 18px", marginBottom: '2rem' }}>
              <Box sx={{ fontSize: '20px', fontWeight: 'bold' }}>Subscribe Premium</Box>
              <p style={{ fontSize: '15px' }}>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
              <Button sx={{ width: '100px', height: '35px', borderRadius: '2rem', marginTop: '15px', fontWeight: 'bold', fontSize: '14px', backgroundColor: '#1da1f2' }}
                variant={'contained'}>Subscribe</Button>
            </Box>
            <Box sx={{ border: '1px solid #2f3336', borderRadius: '2rem', padding: "20px" }}>
              <Box sx={{ fontSize: '20px', fontWeight: 'bold' }}>What's happening</Box>
              <p>新機能のロックを解除し、適格な場合は広告収入の一部を受け取りましょう。</p>
              <p>インド対いんグランド</p>
              <p>インド対いんグランド</p>
              <p>インド対いんグランド</p>
              <p>インド対いんグランド</p>
              <p>インド対いんグランド</p>
              <p>インド対いんグランド</p>
              <p>インド対いんグランド</p>
              <p>インド対いんグランド</p>
              <p>インド対いんグランド</p>
              <p>インド対いんグランド</p>
              <p>インド対いんグランド</p>
            </Box>
          </Box>
        </Box>
      </Grid>

    </Grid>    
  )
}

export default TweetsIndex