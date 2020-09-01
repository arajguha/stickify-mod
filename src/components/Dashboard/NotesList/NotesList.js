import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import NoteCard from './NoteCard/NoteCard'
import { connect } from 'react-redux'

const NotesList = (props) => {
    let noteCards = (
        <Typography variant="h5" color="secondary" style={{margin: 'auto'}}>
            create small stickies...
        </Typography>
    )
    if(props.notes.length !== 0)
        noteCards = props.notes.map(note => <NoteCard key={note.id} id={note.id} text={note.content} pinned={note.pinned} />)
    return (
        <Grid container spacing={3}>
            {noteCards}
        </Grid>
    )
}

const mapStateToProps = (state) => ({
    notes: state.notes
})

export default connect(mapStateToProps)(NotesList)
