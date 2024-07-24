import { FaRegImage, FaRegSmile } from 'react-icons/fa';
import { MdGif, MdPoll, MdSchedule } from 'react-icons/md';
import { Box, IconButton } from '@mui/material';
import useTweet from '../../hooks/useTweet';

const FormIcon = () => {
  const { attachImage } = useTweet();

  return (
    <Box>
      <IconButton size="small" sx={{ color: 'primary.main' }} onClick={attachImage}>
        <FaRegImage />
      </IconButton>
      <IconButton size="small" sx={{ color: 'primary.main' }}>
        <MdGif />
      </IconButton>
      <IconButton size="small" sx={{ color: 'primary.main' }}>
        <MdPoll />
      </IconButton>
      <IconButton size="small" sx={{ color: 'primary.main' }}>
        <FaRegSmile />
      </IconButton>
      <IconButton size="small" sx={{ color: 'primary.main' }}>
        <MdSchedule />
      </IconButton>
    </Box>
  );
};

export default FormIcon;
