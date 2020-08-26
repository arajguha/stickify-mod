import React, { useState } from 'react'
import { Card, CardContent, Grid, Typography, CardActions, IconButton, makeStyles } from '@material-ui/core'
import { Delete as DeleteIcon } from '@material-ui/icons'
import { deleteNoteAction } from '../../../../store/notes/noteActionCreators'
import { connect } from 'react-redux'
import { decrementTotalNotes } from '../../../../store/summary/summaryActionCreators'
import EditIcon from '@material-ui/icons/Edit'
import EditModal from '../../../UI/EditModal'

const useStyles = makeStyles({
    card: {
        textAlign: 'center'
    },
    button: {
        margin: 'auto'
    }
})


const NoteCard = (props) => {
    const classes = useStyles()

    const [editModalOpen, setEditModalOpen] = useState(false)

    const handleDelete = (id) => {
        props.deleteNote(id)
        props.updateTotalNotes()
        
    }

    const handleEdit = () => {
        setEditModalOpen(true)
    }

    return (
        <>
            <Grid item xs={12} sm={4}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="subtitle1" color="secondary">
                            {props.text}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <div style={{margin: 'auto'}}>
                        <IconButton className={classes.button} onClick={() => handleDelete(props.id)}>
                            <DeleteIcon color="secondary"/>
                        </IconButton>
                        <IconButton className={classes.button} onClick={handleEdit}>
                            <EditIcon color="secondary"/>
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
        updateTotalNotes: () => dispatch(decrementTotalNotes())
    }
}

export default connect(null, mapDispatchToProps)(NoteCard)
