import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import InputCard from './InputCard'
import Summary from './Summary'
import NotesList from './NotesList/NotesList'

const useStyles = makeStyles({
    container: {
        margin: '80px auto',
        alignItems: 'center',
        textAlign: 'center',
        padding: '10px'
    }
})

const Dashboard = () => {
    const classes = useStyles()
    return (
        <>
            <Grid className={classes.container} container spacing={3}>
                <Grid item xs={6} sm={8}>
                    <InputCard />
                </Grid>
                <Grid item xs={6} sm={4}>
                    <Summary />
                </Grid>
            </Grid>
            <NotesList />
        </>
    )
}

export default Dashboard
