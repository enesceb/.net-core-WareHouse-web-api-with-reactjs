import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Link, useNavigate, useParams } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import axios from "axios";
import { useLocation } from "react-router-dom";

const UpdateWareHouse = (props) => {
  const theme = createTheme();
  const [updateState, setUpdateState] = useState("");
  const location = useLocation();
  const params = useParams()
  const navigate = useNavigate();
  const fieldname =  location.state.FieldName
  const Warehouseid = location.state.wareHouseID

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://localhost:7089/api/${location.state.data}/${params.id}`, {
        wareHouseName : updateState,
        inventoryName: updateState,
        wareHouseID: Warehouseid
      })
      .then(() => {
        navigate("/");
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
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ p: 4, m: 1, bgcolor: 'secondary.main' }}>
            <CloudSyncIcon sx={{ fontSize: 40 }} />
          </Avatar>
          <Typography component="h1" variant="h5">
            {fieldname}
          </Typography>
          <Box component="form" noValidate onSubmit={handleUpdate} sx={{ mt: 3 }}>
            <Grid container spacing={2} width={400}>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="given-name"
                  name="WareHouseId"
                  fullWidth
                  id="WareHouseId"
                  label={params.id}
                  disabled={true}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="given-name"
                  name={fieldname}
                  required
                  fullWidth
                  id= {fieldname}
                  label={fieldname}
                  autoFocus
                  onChange={(e) => setUpdateState(e.target.value)}
                />
              </Grid>

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Update WareHouse
            </Button>
          </Box>
        </Box>

      </Container>
    </ThemeProvider>
  )
}

export default UpdateWareHouse