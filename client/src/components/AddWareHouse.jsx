import React from 'react'
import axios from "axios";
import  { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from 'react-router-dom';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import IconButton from '@mui/material/IconButton';



const AddWareHouse = () => {
    const theme = createTheme();
    const history = useNavigate();
    const [wareHouseName, setWareHouseName] = useState("");
    
    const handleSubmit = (event) => {
        event.preventDefault();
        axios
        .post("https://localhost:7089/api/tblWarehouses", {
          wareHouseName: wareHouseName,
         })
        .then(() => {
          history("/");  
      });
      
    }
  return (
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
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
        <Avatar sx={{ p: 4, m: 1, bgcolor: 'secondary.main' }}>
          <IconButton sx={{ color: "white" }}>
            <ChevronLeftIcon sx={{ fontSize: 30 }} />
          </IconButton>
          </Avatar>
        </Link>
        </Box>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{p:4, m: 1, bgcolor: 'secondary.main' }}>
          <LibraryAddIcon sx={{ fontSize: 40 }} />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add WareHouse 
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2} width={400}>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="given-name"
                name="wareHouseName"
                required
                fullWidth
                id="wareHouseName"
                label="Ware House"
                autoFocus
                onChange={(e) => setWareHouseName(e.target.value)}
              />
            </Grid>
            
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
         
          >
            Add WareHouse
          </Button>
        </Box>
      </Box>
    {}
    </Container>
  </ThemeProvider>
  )
}

export default AddWareHouse