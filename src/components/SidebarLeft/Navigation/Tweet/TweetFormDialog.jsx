import React, { useEffect } from 'react';
import { Box, Button, Avatar } from '@mui/material';

import useTweet from '../../../../hooks/useTweet';
import TextForm from '../../../Form/TextForm';
import FormIcon from '../../../Form/FormIcon';

const TweetFormDialog = ({ setOpenPost }) => {
  const { handleSubmit, setFocus, handleFormSubmit, tweetContent } = useTweet();

  useEffect(() => {
    setFocus('postContent');
  }, [setFocus]);

  return (
    <Box sx={{ p: 2, borderBottom: '1px solid #2f3336' }}>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
          <Avatar sx={{ mr: 2, bgcolor: 'primary.main' }}>U</Avatar>
          <Box sx={{ width: 400 }}>
            <TextForm />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <FormIcon />
              <Button type="submit" variant="contained" color="primary"
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
                onClick={() => setOpenPost(false)}
              >
                Post
              </Button>
            </Box>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default TweetFormDialog;
