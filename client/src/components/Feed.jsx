import React, { useState } from 'react'
import WareHouseContainer from "./WareHouseContainer"
import Footer from "./Footer"
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

const Feed = () => {


  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
     <WareHouseContainer/>
     <Footer/>  
    </Box>
  )
}

export default Feed