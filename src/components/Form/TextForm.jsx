import { Box, TextField } from '@mui/material';
import useTweet from '../../hooks/useTweet';

const TextForm = () => {
  const { selectedFile, register } = useTweet();

  return (
    <>
      <TextField {...register('postContent')} fullWidth multiline rows={3} placeholder="What is happening?!"
        variant="standard"
        sx={{
          mb: 2,
          '& .MuiInputBase-input': {
            color: 'white',
          },
          '& .MuiInput-underline:before': {
            borderBottomColor: 'rgba(255, 255, 255, 0.42)',
          },
          '& .MuiInputBase-input::placeholder': {
            color: 'rgba(255, 255, 255, 0.5)',
            opacity: 1,
          },
        }}
      />
      <Box sx={{ display: 'flex',flexWrap: 'wrap', gap: 0.2, borderRadius: 2, overflow: 'hidden' }}>
        {selectedFile &&
          selectedFile.map((image, i) => (
            <Box key={i} component="img" src={image.url} alt={image.name}
              sx={{ width: '224px', height: '140px', objectFit: 'cover' }}
            />
          ))}
      </Box>
    </>
  );
};

export default TextForm;
