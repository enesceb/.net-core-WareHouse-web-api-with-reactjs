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
import AddIcon from "@mui/icons-material/Add";

const InventoryItemsTable = () => {

    const [Items, setItems] = useState([])
    const params = useParams()
    const getData = async () => {
        const data = await axios
          .get(`https://localhost:7089/api/InventoryItems/${params.id}`)
          .then((res) => {
            setItems(res.data);
          });
      }

    useEffect(() => {
        getData();
    }, []);

    console.log(Items)
    
    
    if (!Items) return 'Loading...';
    return (
        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="lg">
            <Typography variant="h2" component="h1" gutterBottom>
                Inventory Items
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
                    {Items.length < 10 && (
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "flex-end",
                                p: 1,
                                m: 1,
                                bgcolor: "background.paper",
                                borderRadius: 1,
                            }}
                        >
                            <Link
                                to={`/AddInventoryItem/${params.id}/add`}
                                key={params.id}
                                data-inventoryid={params.id}
                                style={{ textDecoration: "none", padding: "5px" }}
                            >
                                <Button
                                    color="success"
                                    variant="outlined"
                                    startIcon={<AddIcon color="success" />}
                                >
                                    Add New Item
                                </Button>
                            </Link>
                        </Box>
                    )}
                    <Table sx={{ minWidth: 650 }} aria-label="caption table">
                        <caption>A basic table example with a caption</caption>
                        <TableHead>
                            <TableRow>
                                <TableCell>Item ID</TableCell>
                                <TableCell align="right">Item Name</TableCell>
                                <TableCell align="right">Item Quantity</TableCell>
                                <TableCell align="right">Actions </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Items.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell component="th" scope="row">
                                        {item.id}
                                    </TableCell>
                                    <TableCell align="right">{item.item}</TableCell>
                                    <TableCell align="right">{item.quantity}</TableCell>
                                    <TableCell align="right">
                                        <IconButton aria-label="delete" color='error'>
                                            <DeleteAlert query={"InventoryItems"} getData={getData} item={item} />
                                        </IconButton>
                                        <Link to={"/UpdateWareHouse/1"}  >
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

export default InventoryItemsTable