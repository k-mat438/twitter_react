import { Box, Button } from '@mui/material'
import React from 'react'


const Subscribe = () => {
  return (
    <Box sx={{ border: '1px solid #2f3336', borderRadius: '2rem', padding: "14px 18px", margin: '1rem 0' }}>
      <Box sx={{ fontSize: '20px', fontWeight: 'bold' }}>Subscribe Premium</Box>
      <p style={{ fontSize: '15px' }}>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
      <Button sx={{ width: '100px', height: '35px', borderRadius: '2rem', marginTop: '15px', fontWeight: 'bold', fontSize: '14px', backgroundColor: '#1da1f2' }}
        variant={'contained'}>Subscribe</Button>
    </Box>
  )
}

export default Subscribe
