import React from 'react'
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@material-ui/core'

const AlertModal = (props) => {
    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                >
                <DialogTitle id="alert-dialog-title">Stickify Alert</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description" style={{fontWeight: 'bold'}}>
                    {props.message}
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={props.handleClose} color="secondary" variant="outlined" >
                    CANCEL
                </Button>
                <Button onClick={props.handleConfirm} color="secondary" variant="contained" >
                    CONFIRM
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AlertModal
