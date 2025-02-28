import { Box, Avatar, Typography, IconButton } from '@mui/material';

import Elon from '../../../Elon.jpg';
import { TweetActionData } from './TweetActionData';

 const Data = {
  avatar: Elon,
  username:"elonmusk",
  timestamp: "Jun 7",
  comments: "8",
  retweets: "5",
  likes: "193K",
  views: "41M"
}

const Tweet = ({ tweets }) => {

  return (
    <>
      {tweets.map((tweet) => (
        <Box
          sx={{ p: 2, borderBottom: '1px solid #2f3336', color: 'white', width: '568px' }}
          key={tweet.id}
        >
          <Box sx={{ display: 'flex', paddingRight: '16px' }}>
            <Avatar src={Data.avatar} sx={{ mr: 2 }} />
            <Box sx={{ flexGrow: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 'bold', mr: 1, color: '#ffffff' }}
                >
                  {tweet.user.name}
                </Typography>
                <Typography variant="body2" sx={{ color: '#E6E9EA' }}>
                  @{Data.username} · {Data.timestamp}
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ mb: 1, color: '#ffffff' }}>
                {tweet.content}
              </Typography>

              {tweet.image_url && tweet.image_url.length > 0 && (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap:0.2, borderRadius:2, overflow:'hidden'}}>
                  {tweet.image_url.map((url, i) => (
                    <Box key={i} component="img" src={url} alt={`画像 ${i + 1}`}
                      sx={{width: '247px', height: '140px',objectFit: 'cover'}}/>
                  ))}
                </Box>
              )}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', color: '#8899a6' }}>
                {TweetActionData.map((value, key) => (
                  <IconButton key={key} size="small" sx={{ color: 'inherit', '&:hover': { color: value.hoverColor } }}>
                    {value.icon}
                    {value.action}
                  </IconButton>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default Tweet;