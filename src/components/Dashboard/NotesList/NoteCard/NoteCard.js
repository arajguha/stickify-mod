import React from 'react'
import { Card, CardContent, Grid, Typography, CardActions, IconButton } from '@material-ui/core'
import { Delete as DeleteIcon } from '@material-ui/icons'
import { deleteNoteAction } from '../../../../store/noteActionCreators'
import { connect } from 'react-redux'

const NoteCard = (props) => {

    return (
        <Grid item xs={12} sm={4}>
            <Card>
                <CardContent>
                    <Typography variant="subtitle1" color="secondary">
                        {props.text}
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton onClick={() => props.deleteNote(props.id)}>
                        <DeleteIcon color="secondary"/>
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        deleteNote: id => dispatch(deleteNoteAction(id))
    }
}

export default connect(null, mapDispatchToProps)(NoteCard)
