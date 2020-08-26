import React from 'react'
import { Card, CardContent, Grid, Typography, CardActions, IconButton } from '@material-ui/core'
import { Delete as DeleteIcon } from '@material-ui/icons'
import { deleteNoteAction } from '../../../../store/notes/noteActionCreators'
import { connect } from 'react-redux'
import { decrementTotalNotes } from '../../../../store/summary/summaryActionCreators'

const NoteCard = (props) => {
    
    const handleDelete = (id) => {
        //add additional logic if needed
        props.deleteNote(id)
        props.updateTotalNotes()
    }

    return (
        <>
            <Grid item xs={12} sm={4}>
                <Card>
                    <CardContent>
                        <Typography variant="subtitle1" color="secondary">
                            {props.text}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton onClick={() => handleDelete(props.id)}>
                            <DeleteIcon color="secondary"/>
                        </IconButton>
                    </CardActions>
                </Card>
            </Grid>
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
