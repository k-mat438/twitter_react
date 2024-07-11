import React from 'react'
import { Box } from '@mui/material'
import { 
  Card, CardContent, Typography, List, ListItem, 
  ListItemText, Divider, Avatar
} from '@mui/material';

const Happening = () => {
  return (
    <Box sx={{ 
      border: '1px solid #2f3336', 
      borderRadius: '2rem', 
      padding: "14px 18px", 
      margin: '1rem 0',
      backgroundColor: '#000', // 背景を黒に設定
      color: '#fff' // デフォルトのテキスト色を白に設定
    }}>
      <Box sx={{ fontSize: '20px', fontWeight: 'bold', color: '#fff' }}>What's happening</Box>
      <CardContent>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar src="/path-to-uruguay-image.jpg" sx={{ width: 56, height: 56, mr: 2 }} />
          <Box>
            <Typography variant="subtitle1" sx={{ color: '#fff' }}>Uruguay vs Brazil</Typography>
            <Typography variant="caption" sx={{ color: '#71767b' }}>Copa América • 5 hours ago</Typography>
          </Box>
        </Box>
    
        <List>
          <ListItem>
            <ListItemText 
              primary={<Typography sx={{ color: '#fff' }}>#七夕の夜は水玉ドローンショー</Typography>}
              secondary={<Typography sx={{ color: '#71767b' }}>今夜7/7 19:00〜 YouTube生配信</Typography>}
            />
          </ListItem>
          <Divider sx={{ borderColor: '#2f3336' }} />
          <ListItem>
            <ListItemText 
              primary={<Typography sx={{ color: '#fff' }}>#東京都知事選挙2024</Typography>}
              secondary={<Typography sx={{ color: '#71767b' }}>Trending with 都知事選の投票, #選挙に行こう</Typography>}
            />
          </ListItem>
          <Divider sx={{ borderColor: '#2f3336' }} />
          <ListItem>
            <ListItemText 
              primary={<Typography sx={{ color: '#fff' }}>出口調査</Typography>}
              secondary={<Typography sx={{ color: '#71767b' }}>13.9K posts</Typography>}
            />
          </ListItem>
          <Divider sx={{ borderColor: '#2f3336' }} />
          <ListItem>
            <ListItemText 
              primary={<Typography sx={{ color: '#fff' }}>令和ロマン</Typography>}
              secondary={<Typography sx={{ color: '#71767b' }}>Trending with #ABCお笑いグランプリ, フースーヤ</Typography>}
            />
          </ListItem>
        </List>
        
        <Typography variant="body2" sx={{ color: '#1d9bf0' }}>
          Show more
        </Typography>
      </CardContent>
    </Box>    
  )
}

export default Happening
