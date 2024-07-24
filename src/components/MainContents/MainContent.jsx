import { useState, useEffect } from 'react';
import { Box, CircularProgress } from '@mui/material';

import Header from './Header';
import TweetForm from './Tweet/TweetForm';
import Tweet from './Tweet/Tweet';
import TweetElon from './Tweet/TweetElon';

import { useGetTweet } from '../../contexts/tweetContext';

const MainContent = () => {
  const [tweetLoading, setTweetLoading] = useState(true);
  const { tweets, getTweet } = useGetTweet();

  useEffect(() => {
    const timer = setTimeout(() => {
      setTweetLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    getTweet();
  },[])
  
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
          <Tweet tweets={tweets}/>
          <TweetElon />
          <TweetElon />
          <TweetElon />
          <TweetElon />
          <TweetElon />
          <TweetElon />
          <TweetElon />
        </>
      )}
    </Box>
  );
};

export default MainContent;
