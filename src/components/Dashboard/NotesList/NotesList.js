import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import NoteCard from './NoteCard/NoteCard'
import { connect } from 'react-redux'

const NotesList = (props) => {
    let noteCards = (
        <Typography variant="h5" color="secondary" style={{margin: 'auto'}}>
            start creating small sticky notes...
        </Typography>
    )
    if(props.notes.length !== 0)
        noteCards = props.notes.map(note => <NoteCard key={note.id} id={note.id} text={note.content} />)
    return (
        <Grid container spacing={3}>
            {noteCards}
        </Grid>
    )
}

const mapStateToProps = (notes) => ({
    notes: notes
})

export default connect(mapStateToProps)(NotesList)