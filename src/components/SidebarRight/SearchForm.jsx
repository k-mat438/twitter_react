import React from 'react';
import { Box, InputBase, IconButton, AppBar } from '@mui/material';
import { FaSearch } from 'react-icons/fa';

const SearchForm = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#000000' }}>
        <Box
          sx={{
            backgroundColor: '#202327',
            display: 'flex',
            alignItems: 'left',
            borderRadius: '9999px',
            height: '42px',
            width: '100%',
            margin: 'auto'
          }}
        >
          <IconButton sx={{ p: '10px' }} aria-label="search">
            <FaSearch style={{ fontSize: '17px', color: '#71767A' }} />
          </IconButton>
          <InputBase
            sx={{
              ml: 1,
              flex: 1,
              color: 'white',
              '& input::placeholder': {
                color: '#71767A',
                opacity: 0.7,
              },
            }}
            placeholder="Search"
            inputProps={{ 'aria-label': 'search twitter' }}
          />
        </Box>
    </AppBar>
  );
};



export default SearchForm;
