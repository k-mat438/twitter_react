import React, { useState } from "react";
import { AppBar, Typography, Box, Button } from "@mui/material";

const Header = () => {
  const [selected, setSelected] = useState('for you');

  const buttonStyles = {
    color: 'white',
    borderRadius: 0,
    width: '100%',
    height: '100%',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    padding: '15px 0',
  };

  const typographyStyles = (type) => ({
    fontWeight: selected === type ? 'bold' : 'normal',
    color: selected === type ? 'white' : '#71767A',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-15px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '80px',
      height: '4px',
      backgroundColor: selected === type ? 'primary.main' : 'transparent',
      transition: 'background-color 0.3s',
    },
  });

  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(10px)',borderBottom: '1px solid #2f3336' }}>
      <Box sx={{ display: 'flex', width: '100%' }}>
        <Box sx={{ flexBasis: '50%', display: 'flex', justifyContent: 'center' }}>
          <Button
            onClick={() => setSelected('for you')}
            sx={buttonStyles}
            disableRipple
          >
            <Typography sx={typographyStyles('for you')}>
              For you
            </Typography>
          </Button>
        </Box>
        <Box sx={{ flexBasis: '50%', display: 'flex', justifyContent: 'center' }}>
          <Button
            onClick={() => setSelected('following')}
            sx={buttonStyles}
            disableRipple
          >
            <Typography sx={typographyStyles('following')}>
              Following
            </Typography>
          </Button>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Header;
