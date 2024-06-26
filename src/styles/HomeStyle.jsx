import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  breakpoints: {
    values: {
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export const CustomButton = {
  border: '0.1px solid #fff',
  borderRadius: '2rem',
  fontSize: '1rem',
  fontWeight: 'bold',
  width: '300px',
  [theme.breakpoints.up('xl')]: {
    width: '380px',
  }
};

export const IconWithButton = {
  backgroundColor: '#fff',
  color: '#000',
  borderRadius: '2rem',
  "&:hover": {
    opacity: '0.9',
    backgroundColor: '#e0e0e0'
  },
  textTransform: 'none',
  maxWidth: '380px',
  [theme.breakpoints.down('xl')]: {
    width: '300px',
  }
};

export const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper', 
  color: '#fff', 
  p: 4,
  borderRadius: '8px',
};
