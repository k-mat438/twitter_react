import { styled } from '@mui/material/styles';
import Backdrop from '@mui/material/Backdrop';
import { createTheme } from '@mui/material/styles';


export const CustomBackdrop = styled(Backdrop)(() => ({
  backgroundColor: 'rgba(75,89,100, 0.5)',
}));

export const theme = createTheme({
  palette: {
    mode: 'dark', // ダークモードを適用
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#333639', // アウトラインの色を白に設定
          },
        },
      },
    },
  },
});
