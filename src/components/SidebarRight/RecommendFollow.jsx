import React from 'react';
import { Box, Typography, Avatar, Button, List, ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction } from '@mui/material';
import { FaCheckCircle } from 'react-icons/fa';

const RecommendFollow = () => {
  return (
    <Box sx={{ border: '1px solid #2f3336', borderRadius: '2rem', padding: "14px 18px", margin: '1rem 0' }}>
      <Box sx={{ fontSize: '20px', fontWeight: 'bold' }}>Who to follow</Box>
      
      <List sx={{ width: '100%' }}>
        {[
          { name: 'ちょめ子', handle: '@chome2xx', avatar: '/path-to-chome-avatar.jpg', verified: false },
          { name: 'てとらαSI', handle: '@TETRA_IT', avatar: '/path-to-tetra-avatar.jpg', verified: true },
          { name: 'じゅん', handle: '@k_junpei29', avatar: '/path-to-jun-avatar.jpg', verified: false },
        ].map((user, index) => (
          <ListItem key={index} alignItems="flex-start" sx={{ padding: '12px 0' }}>
            <ListItemAvatar>
              <Avatar alt={user.name} src={user.avatar} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {user.name}
                  {user.verified && <FaCheckCircle sx={{ color: '#1DA1F2', fontSize: 'small', ml: 0.5 }} />}
                </Box>
              }
              secondary={
                <Typography sx={{ color: '#71767B' }}>
                  {user.handle}
                </Typography>
              }
            />
            <ListItemSecondaryAction>
              <Button variant="outlined" sx={{ 
                color: '#fff', 
                borderColor: '#fff', 
                borderRadius: '9999px',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderColor: '#fff',
                }
              }}>
                Follow
              </Button>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      <Typography sx={{ color: '#1d9bf0', cursor: 'pointer', mt: 1 }}>Show more</Typography>
    </Box>
  )
}

export default RecommendFollow
