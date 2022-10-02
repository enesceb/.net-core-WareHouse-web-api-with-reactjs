import React from 'react'
import axios from "axios";
import  { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import IconButton from '@mui/material/IconButton';
import { useLocation } from "react-router-dom";
import CloudSyncIcon from '@mui/icons-material/CloudSync';


const UpdateItems = () => {
    const theme = createTheme();
    const history = useNavigate();
    const params = useParams()
    const location = useLocation();
    const [Item, setItem] = useState("");
    const [Quantity, setQuantity] = useState("");

    console.log(location)
    
    const handleUpdate = (e) => {
        e.preventDefault();
        axios
          .put(`https://localhost:7089/api/InventoryItems/${params.id}`, {
            Item : Item,
            Quantity: Quantity,
            inventoryID: location.state.inventoryID
          })
          .then(() => {
            history("/");
          });
      };
    
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
      <Avatar sx={{ p: 4, m: 1, bgcolor: 'secondary.main' }}>
            <CloudSyncIcon sx={{ fontSize: 40 }} />
          </Avatar>
        <Typography component="h1" variant="h5">
          Update Item
        </Typography>
        <Box component="form" noValidate onSubmit={handleUpdate} sx={{ mt: 3 }}>
          <Grid container spacing={2} width={400}>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="given-name"
                name="item"
                required
                fullWidth
                id="item"
                label="Item Name"
                autoFocus
                onChange={(e) => setItem(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="given-name"
                name="quantity"
                required
                fullWidth
                id="quantity"
                label="Quantity"
                onChange={(e) => setQuantity(e.target.value)}
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

export default UpdateItems