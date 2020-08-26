import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { connect } from 'react-redux'
import { updateNoteAction } from '../../store/notes/noteActionCreators'

const EditModal = (props) => {
    const [formText, setFormText] = useState('')

    //componentDidMount
    useEffect(() => {
        setFormText(props.text)
    }, [props.text])

    const handleChange = (e) => {
        setFormText(e.target.value)   
    }
    const handleSubmit = () => {
        //console.log('form edited')
        //update the note in store
        props.updateNote(props.id, formText)
        props.handleClose()
    }
    const handleCancel = () => {
        setFormText(props.text)
        props.handleClose()
    }
    return (
        <div>
            <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title"> Edit </DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        id="name"
                        color="secondary"
                        value={formText}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancel} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} color="secondary" variant="contained">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNote: (id, newText) => dispatch(updateNoteAction(id, newText))
    }
}

export default connect(null, mapDispatchToProps)(EditModal)
