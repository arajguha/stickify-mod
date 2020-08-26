import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import InputCard from './InputCard'
import NotificationTray from './NotificationTray'
import NotesList from './NotesList/NotesList'

const useStyles = makeStyles({
    container: {
        margin: '80px',
        alignItems: 'center',
        textAlign: 'center'
    }
})

const Dashboard = () => {
    const classes = useStyles()
    return (
        <>
            <Grid className={classes.container} container spacing={3}>
                <Grid item xs={1}></Grid>
                <Grid item xs={6}>
                    <InputCard />
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={3}>
                    <NotificationTray />
                </Grid>
            </Grid>
            <NotesList />
        </>
    )
}

export default Dashboard
