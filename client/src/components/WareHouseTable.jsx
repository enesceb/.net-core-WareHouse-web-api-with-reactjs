import * as React from 'react';
import { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import axios from 'axios';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import DeleteAlert from './DeleteAlert'



export default function AcccessibleTable() {
    const [WareHousesData, setWareHouseData] = useState([])



    function getData() {
        axios
          .get("https://localhost:7089/api/tblWarehouses")
          .then((res) => {
            setWareHouseData(res.data);
          });
      }
     
   

   

      useEffect(() => {
        getData();
      }, []);
    return (
        <TableContainer component={Paper} sx={{ mb: 2 }}>
           {WareHousesData.length < 3 &&
           
            <Box
            
            sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                p: 1,
                m: 1,
                bgcolor: 'background.paper',
                borderRadius: 1,
            }}>  
      
                   <Link to={"/AddWareHouse"} style={{ textDecoration: 'none', padding: '5px' }} >
                <Button color='success' variant="outlined" startIcon={<AddIcon color="success" />}>

                    Add New WareHouse

                </Button>
            </Link>
        </Box>
}

            <Table sx={{ minWidth: 650 }} aria-label="caption table">
                <caption>A basic table example with a caption</caption>

                <TableHead>
                    <TableRow>
                        <TableCell>WareHouse ID</TableCell>
                        <TableCell align="right">WareHouse Name</TableCell>
                        <TableCell align="right">Actions</TableCell>

                    </TableRow>
                </TableHead>

                <TableBody>
                    {WareHousesData.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell component="th" scope="row">
                                {item.id}
                            </TableCell>
                            <TableCell align="right">{item.wareHouseName}</TableCell>
                            <TableCell align="right">
                                <IconButton aria-label="view" color='primary'>
                                    <Link to={"/inventory/1"} >
                                        <Button variant="outlined" startIcon={<VisibilityIcon />}>
                                            View Inventory
                                        </Button>
                                    </Link>
                                </IconButton>
                                <IconButton aria-label="delete" color='error'>
                                <DeleteAlert getData={getData} item={item} />
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
    );
}