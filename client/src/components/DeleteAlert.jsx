import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

export default function AlertDialog(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    function handleDelete(id) {
        axios
            .delete(`https://localhost:7089/api/${props.query}/${props.item.id}`)
            .then(() => {
                props.getData();
                setOpen(false);
            });
    }


    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <DeleteIcon onClick={handleClickOpen} sx={{ fontSize: 30 }} />
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"DELETE WAREHOUSE"}
                </DialogTitle>
                <DialogContent sx={{ width: 500 }}>
                    <DialogContentText sx={{ display: "flex", justifyContent: "center", fontSize: "20px", fontWeight: "400" }} id="alert-dialog-description">
                        Do you want to delete {props.item.wareHouseName}?<br />
                        If you want, you can click to Agree Button
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleDelete} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}