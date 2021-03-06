import React from 'react'
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core'
import { connect } from 'react-redux'

const useStyles = makeStyles({
    card: {
        textAlign: 'left',
        padding: '3px'
    }
})

const Summary = (props) => {
    const classes = useStyles()
    const bull = <span style={{padding: '3px'}}>•</span>
    return (
        <div className={classes.card}>
            <Card>
                <CardContent>
                    <Typography variant="h6" color="secondary" style={{fontWeight: 'bold'}}>
                        Summary
                    </Typography>
                    <hr />
                    <Typography variant="subtitle1" color="secondary">
                        {bull}Total Notes : {props.summary.totalNotes}
                    </Typography>
                    <Typography variant="subtitle1" color="secondary">
                        {bull}Pinned notes : {props.summary.pinned}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        summary: state.summary
    }
}

export default connect(mapStateToProps)(Summary)
