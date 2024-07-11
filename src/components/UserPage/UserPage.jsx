import React from 'react';

import { Box } from '@mui/material';
import UserHeader from "./UserHeader";
import UserProfile from './UserProfile';
import Tweet from '../MainContents/Tweet';

const UserPage = () => {
  return (
    <Box sx={{marginRight:'30px',borderLeft: '1px solid #2f3336',borderRight: '1px solid #2f3336', width: '600px'}}>
      <UserHeader />
      <UserProfile />
      <Tweet />
      <Tweet />
      <Tweet />
    </Box> 
  );
}

export default UserPage;
