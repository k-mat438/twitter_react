import { Box } from '@mui/material';
import SearchForm from './SearchForm'
import Subscribe from './Subscribe';
import Happening from './Happening';
import RecommendFollow from './RecommendFollow';

const SidebarRight = () => {
  return (
    <Box sx={{width:'100%',paddingRight: '20px'}}>
      <SearchForm />
      <Subscribe />
      <Happening />
      <RecommendFollow />
    </Box>
  )
}

export default SidebarRight;