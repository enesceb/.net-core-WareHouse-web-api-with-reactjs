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






const InventoryTable = () => {
  

    
    const [Inventory, setInventory] = useState([])
    const params = useParams()
    const getData = async () =>  {
        const data = await axios
          .get(`https://localhost:7089/api/tblInventory/${params.id}`)
          .then((res) => {
            setInventory([res.data]);
          });
      }
    
      useEffect(() => {
        getData();
      }, []);
   
      if(!Inventory) return 'Loading...';
      
      console.log(Inventory)
  return (
          <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="caption table">
                <caption>A basic table example with a caption</caption>

                <TableHead>
                    <TableRow>
                        <TableCell>Item ID</TableCell>
                        <TableCell align="right">Inventory Name</TableCell>
                        <TableCell align="right">Item </TableCell>

                    </TableRow>
                </TableHead>

                <TableBody>
                    {Inventory.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell component="th" scope="row">
                                {item.id}
                            </TableCell>
                            <TableCell align="right">{item.inventoryName}</TableCell>
                            <TableCell align="right">
                                {/* <IconButton aria-label="delete" color='primary'>
                                    <Link to={"/inventory/1"}  >
                                        <Button variant="outlined" startIcon={<VisibilityIcon />}>
                                            View Inventory
                                        </Button>
                                    </Link>
                                </IconButton>
                                <IconButton aria-label="delete" color='error'>
                                <DeleteAlert/>
                                </IconButton>
                                <Link to={"/UpdateWareHouse/1"}  >
                                    <IconButton color="secondary">
                                        <CloudSyncIcon sx={{ fontSize: 30 }} />
                                    </IconButton>
                                </Link> */}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
  )
}

export default InventoryTable