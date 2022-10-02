import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from '@mui/material/Button';
import { Link, useParams } from 'react-router-dom';
import DeleteAlert from './DeleteAlert'
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';






const InventoryTable = () => {
   const [Inventory, setInventory] = useState([{}])
    const params = useParams()
    const getData = async () => {
        const data = await axios
            .get(`https://localhost:7089/api/tblInventory/${params.id}`)
            .then((res) => {
                setInventory([res.data]);
            });
    }

    useEffect(() => {
        getData();
    }, []);

    if (!Inventory) return 'Loading...';

    return (
        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="lg">
            <Typography variant="h2" component="h1" gutterBottom>
                {Inventory[0]?.inventoryName}
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

                        <IconButton sx={{ bgcolor: 'primary.main' }}>
                            <ChevronLeftIcon sx={{ fontSize: 30 }} />
                        </IconButton>

                    </Link>
                </Box>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="caption table">
                        <caption>A basic table example with a caption</caption>
                        <TableHead>
                            <TableRow>
                                <TableCell>Inventory ID</TableCell>
                                <TableCell align="right">Inventory Name</TableCell>
                                <TableCell align="right">Actions </TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Inventory.map((item , index) => (
                                <TableRow key={index}>
                                    <TableCell component="th" scope="row">
                                        {item.id}
                                    </TableCell>
                                    <TableCell align="right">{item.inventoryName}</TableCell>
                                    <TableCell align="right">
                                        <IconButton aria-label="delete" color='primary'>
                                            <Link key={item.id} data-inventoryid={item.id} to={`inventoryid/${item.id}`} >
                                                <Button variant="outlined" startIcon={<VisibilityIcon />}>
                                                    View Items
                                                </Button>
                                            </Link>
                                        </IconButton>
                                      
                                        <Link to={`UpdateWareHouse/${item.id}`}  state={{ data: "tblInventory" , FieldName: "inventoryName", wareHouseID: item.wareHouseID  }}  >
                                            <IconButton color="secondary">
                                                <CloudSyncIcon sx={{ fontSize: 30 }} />
                                            </IconButton>
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Typography>
            <Typography variant="body1">ALTIS TECH. CASE</Typography>
        </Container>
    )
}

export default InventoryTable