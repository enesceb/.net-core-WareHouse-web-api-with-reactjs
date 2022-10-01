import * as React from 'react';
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
import { Link } from 'react-router-dom';
import DeleteAlert from './DeleteAlert'
import CloudSyncIcon from '@mui/icons-material/CloudSync';


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159),
    createData('Ice cream sandwich', 237),
    createData('Eclair', 262),
];


const InventoryTable = () => {
  return (
          <TableContainer component={Paper}>
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
                    {rows.map((item) => (
                        <TableRow key={item.name}>
                            <TableCell component="th" scope="row">
                                {item.name}
                            </TableCell>
                            <TableCell align="right">{item.calories}</TableCell>
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