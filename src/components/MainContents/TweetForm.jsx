import React, { useState } from 'react';
import { Box, TextField, Button, Avatar, IconButton } from '@mui/material';
import { FaRegImage, FaRegSmile } from 'react-icons/fa';
import { MdGif, MdPoll, MdSchedule } from 'react-icons/md';

const TweetForm = () => {
  const [tweetContent, setTweetContent] = useState('');

  const handleTweetChange = (event) => {
    setTweetContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Tweet submitted:', tweetContent);
    setTweetContent('');
  };

  return (
    <Box sx={{ p: 2, borderBottom: '1px solid #2f3336', paddingRight:'70px' }}>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
          <Avatar sx={{ mr: 2, bgcolor: 'primary.main' }}>U</Avatar>
          <TextField
            fullWidth
            multiline
            rows={3}
            placeholder="What is happening?!"
            value={tweetContent}
            onChange={handleTweetChange}
            variant="standard"
            sx={{
              '& .MuiInputBase-input': {
                color: 'white',
              },
              '& .MuiInput-underline:before': {
                borderBottomColor: 'rgba(255, 255, 255, 0.42)',
              },
              '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                borderBottomColor: 'rgba(255, 255, 255, 0.87)',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: 'primary.main',
              },
              '& .MuiInputBase-input::placeholder': {
                color: 'rgba(255, 255, 255, 0.5)',
                opacity: 1,
              },
            }}
          />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <IconButton size="small" sx={{ color: 'primary.main' }}><FaRegImage /></IconButton>
            <IconButton size="small" sx={{ color: 'primary.main' }}><MdGif /></IconButton>
            <IconButton size="small" sx={{ color: 'primary.main' }}><MdPoll /></IconButton>
            <IconButton size="small" sx={{ color: 'primary.main' }}><FaRegSmile /></IconButton>
            <IconButton size="small" sx={{ color: 'primary.main' }}><MdSchedule /></IconButton>
          </Box>
          <Button 
            variant="contained" 
            color="primary" 
            type="submit" 
            disabled={!tweetContent.trim()}
            sx={{
              bgcolor: 'primary.main',
              color: 'white',
              '&:hover': {
                bgcolor: 'primary.dark',
              },
              '&.Mui-disabled': {
                bgcolor: 'rgba(29, 161, 242, 0.5)',
                color: 'rgba(255, 255, 255, 0.5)',
              },
            }}
          >
            Post
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default TweetForm;