import React from 'react';
import { Box, Avatar, Typography, IconButton } from '@mui/material';
import { FaRegComment, FaRetweet, FaRegHeart, FaRegBookmark } from 'react-icons/fa';
import { IoStatsChart, IoShareOutline } from 'react-icons/io5';
import Elon from '../../Elon.jpg';

 const Data = {
  avatar: Elon,
  name :"Elon Musk",
  username:"elonmusk",
  content: "Today was a great day for humanity’s future as a spacefaring civilization!  Nothing unites us more than working together towards inspiring objectives.",
  timestamp: "Jun 7",
  comments: "8",
  retweets: "5",
  likes: "193K",
  views: "41M"
}

const Tweet = () => {
  return (
    <Box sx={{ 
      p: 2, 
      borderBottom: '1px solid #2f3336',
      color: 'white',
      width: '568px',
    }}>
      <Box sx={{ display: 'flex', paddingRight:'16px' }}>
        <Avatar src={Data.avatar} sx={{ mr: 2 }} />
        <Box sx={{ flexGrow: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mr: 1, color: '#ffffff' }}>{Data.name}</Typography>
            <Typography variant="body2" sx={{ color: '#E6E9EA' }}>@{Data.username} · {Data.timestamp}</Typography>
          </Box>
          <Typography variant="body1" sx={{ mb: 2, color: '#ffffff' }}>{Data.content}</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', color: '#8899a6' }}>
            <IconButton size="small" sx={{ color: 'inherit', '&:hover': { color: '#1da1f2' } }}>
              <FaRegComment />
              <Typography sx={{ ml: 1, fontSize: '0.8rem' }}>{Data.comments}</Typography>
            </IconButton>
            <IconButton size="small" sx={{ color: 'inherit', '&:hover': { color: '#17bf63' } }}>
              <FaRetweet />
              <Typography sx={{ ml: 1, fontSize: '0.8rem' }}>{Data.retweets}</Typography>
            </IconButton>
            <IconButton size="small" sx={{ color: 'inherit', '&:hover': { color: '#e0245e' } }}>
              <FaRegHeart />
              <Typography sx={{ ml: 1, fontSize: '0.8rem' }}>{Data.likes}</Typography>
            </IconButton>
            <IconButton size="small" sx={{ color: 'inherit', '&:hover': { color: '#1da1f2' } }}>
              <IoStatsChart />
              <Typography sx={{ ml: 1, fontSize: '0.8rem' }}>{Data.views}</Typography>
            </IconButton>
            <IconButton size="small" sx={{ color: 'inherit', '&:hover': { color: '#1da1f2' } }}>
              <FaRegBookmark />
            </IconButton>
            <IconButton size="small" sx={{ color: 'inherit', '&:hover': { color: '#1da1f2' } }}>
              <IoShareOutline />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Tweet;