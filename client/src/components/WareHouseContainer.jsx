import React from 'react'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import WareHouseTable from "./WareHouseTable"

const WareHouseContainer = () => {
  return (
    <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="lg">
    <Typography variant="h2" component="h1" gutterBottom>
     .NET Core WareHouse App with ReactJS
    </Typography>
    <Typography variant="h5" component="h2" gutterBottom>

    <WareHouseTable/>
    
    </Typography>
    <Typography variant="body1">ALTIS TECH. CASE</Typography>
  </Container>
  )
}

export default WareHouseContainer