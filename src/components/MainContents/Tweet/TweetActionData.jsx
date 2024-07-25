import { FaRegComment, FaRetweet, FaRegHeart, FaRegBookmark } from 'react-icons/fa';
import { IoStatsChart, IoShareOutline } from 'react-icons/io5';
import { Typography } from '@mui/material';


const Data = {
  comments: "8",
  retweets: "5",
  likes: "193K",
  views: "41M"
}

export const TweetActionData = [
  { icon: <FaRegComment />, action: <Typography sx={{ ml: 1, fontSize: '0.8rem' }}>{Data.comments}</Typography>, hoverColor: '#1da1f2' },
  { icon: <FaRetweet />, action: <Typography sx={{ ml: 1, fontSize: '0.8rem' }}>{Data.retweets}</Typography>, hoverColor: '#17bf63' },
  { icon: <FaRegHeart />, action: <Typography sx={{ ml: 1, fontSize: '0.8rem' }}>{Data.likes}</Typography>, hoverColor: '#e0245e' },
  { icon: <IoStatsChart />, action: <Typography sx={{ ml: 1, fontSize: '0.8rem' }}>{Data.views}</Typography>, hoverColor: '#1da1f2' },
  { icon: <FaRegBookmark />, action: null, hoverColor: '#1da1f2' },
  { icon: <IoShareOutline />, action: null, hoverColor: '#1da1f2' }
]