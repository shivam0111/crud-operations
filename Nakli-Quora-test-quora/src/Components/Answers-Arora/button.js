import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from "@material-ui/core"
import axios from "axios"
import { FormControl } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    FormControl: {
        width: 500
    }
}))

export default function FormDialog() {
    const [question, setQuestion] = useState("");
    const [about, setAbout] = useState("");

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const changeOnClick = e => {
        e.preventDefault();
        const articles = {
            question,
            about
        }

        axios.post("/questions/addQuestion", articles)
            .then(res => console.log(res.data))
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div>
            <FormControl  onSubmit={changeOnClick} encType="multipart/form-data">
                <Button variant="outlined" color="primary" onClick={handleClickOpen} >
                    Open form dialog
      </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle id="form-dialog-title">ENTER YOUR THOUGHTS</DialogTitle>

                    <DialogContent>
                        <DialogContentText>

                        </DialogContentText>
                        <TextField

                            autoFocus
                            margin="dense"
                            id="name"
                            label=" Question"
                            type="question"
                            fullWidth
                            className={classes.FormControl}
                            onChange={e => setQuestion(e.target.value)}


                        />
                        <TextField
                            multiline
                            rows="4"
                            autoFocus
                            margin="dense"
                            id="name"
                            label="About"
                            type="about"
                            fullWidth
                            className={classes.FormControl}
                            onChange={e => setAbout(e.target.value)}


                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
          </Button>
                        <Button onClick={handleClose} color="primary">
                            Subscribe
          </Button>
                    </DialogActions>
                </Dialog>
            </FormControl>
        </div>
    );
}