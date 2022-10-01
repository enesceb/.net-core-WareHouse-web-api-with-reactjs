import React, { useState } from 'react'
import WareHouseContainer from "./WareHouseContainer"
import Footer from "./Footer"
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import InventoryContainer from './InventoryContainer';

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