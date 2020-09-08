import React, { useState } from 'react'
import 
{   Card, 
    CardContent, 
    Grid, 
    Typography,
    CardActions,
    IconButton,
    makeStyles 
} from '@material-ui/core'
import { Delete as DeleteIcon } from '@material-ui/icons'
import { deleteNoteAction, pinNote } from '../../../../store/notes/noteActionCreators'
import { connect } from 'react-redux'
import { decrementTotalNotes, increasePinCount, decreasePinCount } from '../../../../store/summary/summaryActionCreators'
import EditIcon from '@material-ui/icons/Edit'
import EditModal from '../../../UI/EditModal'
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import LabelIcon from '@material-ui/icons/Label'

const useStyles = makeStyles({
    card: {
        textAlign: 'center'
    },
    button: {
        margin: 'auto'
    },
    pinnedBackground: {
        textAlign: 'center',
        backgroundColor: '#FAEBD7'
    } 
})

const NoteCard = (props) => {
    const classes = useStyles()
    const [editModalOpen, setEditModalOpen] = useState(false)
    //const [pinned, setPinned] = useState(false)

    const handleDelete = (id) => {
        props.deleteNote(id)
        props.updateTotalNotes()
        if(props.pinned)
            props.decreasePinCount()
    }

    const handleEdit = () => {
        setEditModalOpen(true)
    }

    const togglePin = id => {
        if(props.pinned) props.decreasePinCount()
        else props.increasePinCount()

        props.pinNote(props.id)
    }

    const cardClass = props.pinned ? 'pinnedBackground' : 'card'

    return (
        <>
            <Grid item xs={12} sm={4}>
                <Card className={classes[cardClass]}>
                    <CardContent>
                        <Typography variant="subtitle1" color="secondary">
                            {props.text}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <div style={{margin: 'auto'}}>
                        <IconButton className={classes.button} title="delete" onClick={() => handleDelete(props.id)}>
                            <DeleteIcon color="secondary"/>
                        </IconButton>
                        <IconButton className={classes.button} title="edit" onClick={handleEdit}>
                            <EditIcon color="secondary"/>
                        </IconButton>
                        <IconButton title="pin" onClick={() => togglePin(props.id)}>
                            { props.pinned ? <LabelIcon color="secondary" /> : <LabelOutlinedIcon color="secondary" /> }
                        </IconButton>
                        </div>
                    </CardActions>
                </Card>
            </Grid>
            
            <EditModal open={editModalOpen} handleClose={() => setEditModalOpen(false)} text={props.text} id={props.id} />
            
        </>
    )
}


const mapDispatchToProps = dispatch => {
    return {
        deleteNote: id => dispatch(deleteNoteAction(id)),
        updateTotalNotes: () => dispatch(decrementTotalNotes()),
        pinNote: (id) => dispatch(pinNote(id)),
        increasePinCount: () => dispatch(increasePinCount()),
        decreasePinCount: () => dispatch(decreasePinCount())
    }
}

export default connect(null, mapDispatchToProps)(NoteCard)
