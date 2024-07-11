import { useState, useEffect } from 'react';
import { Box, CircularProgress } from '@mui/material';

import Header from './Header';
import TweetForm from './TweetForm';
import Tweet from './Tweet';

const MainContent = () => {
  const [tweetLoading, setTweetLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTweetLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      sx={{
        marginRight: '30px',
        borderLeft: '1px solid #2f3336',
        borderRight: '1px solid #2f3336'
      }}
    >
      <Header />
      <TweetForm />
      {tweetLoading ? (
        <Box sx={{display: 'flex' ,justifyContent: 'center' ,width: '600px' ,paddingTop: '50px'}}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
        </>
      )}
    </Box>
  );
};

export default MainContent;
