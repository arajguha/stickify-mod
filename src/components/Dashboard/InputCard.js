import React, { useState } from 'react'
import { TextField, IconButton, Card, CardContent, CardActions, makeStyles } from '@material-ui/core'
import { AddCircle } from '@material-ui/icons';
import { addNoteAction } from '../../store/noteActionCreators'
import { connect } from 'react-redux'
import CustomModal from '../UI/CustomModal'

const useStyles = makeStyles({
    button: {
        margin: 'auto',
        padding: '10px'
    },
    card: {
        padding: '5px'
    }
})

const InputCard = (props) => {
    const classes = useStyles()
    const [note, setNote] = useState('')
    const [modalOpen, setModalOpen] = useState(false)
    const [modalMessage, setModalMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!note || note.trim() === '') {
            setModalMessage('Invalid Note')
            setModalOpen(true)
        }
        
        else 
            props.addNote(note)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <Card className={classes.card}>
                <CardContent>
                    <TextField 
                        id="outlined-basic" 
                        label="Enter Note" 
                        variant="outlined" 
                        color="secondary"
                        onChange={(e) => setNote(e.target.value)}
                        value={note} 
                        required 
                    />
                </CardContent>
                <CardActions>
                    <IconButton 
                        className={classes.button}
                        onClick={handleSubmit}
                    >
                        <AddCircle color="secondary" fontSize="large" />
                    </IconButton>
                </CardActions>
            </Card>
            </form>
            <CustomModal
                open={modalOpen}
                handleClose={() => setModalOpen(false)}
                message={modalMessage} 
            />
        </div>
            
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNote: (note) => dispatch(addNoteAction(note)) 
    }
}

const mapStateToProps = (state) => {
    return {
        notes: state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputCard)
