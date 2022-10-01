import React from 'react'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InventoryTable from './InventoryTable';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Box from '@mui/material/Box';

const InventoryContainer = () => {
  return (
    <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="lg">
    <Typography variant="h2" component="h1" gutterBottom>
     Inventory 1 
    </Typography>
    <Typography variant="h5" component="h2" gutterBottom>
    <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}>
        <Link to={"/"}  >
      
          <IconButton  sx={{ bgcolor: 'primary.main'}}>
            <ChevronLeftIcon sx={{fontSize: 30 }} />
          </IconButton>

        </Link>
        </Box>
    <InventoryTable/>
    
    </Typography>
    <Typography variant="body1">ALTIS TECH. CASE</Typography>
  </Container>
  )
}

export default InventoryContainer