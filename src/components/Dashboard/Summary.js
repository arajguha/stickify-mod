import React from 'react'
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core'
import { connect } from 'react-redux'

const useStyles = makeStyles({
    card: {
        alignItems: 'left',
        padding: '5px'
    }
})

const Summary = (props) => {
    const classes = useStyles()
    const bull = <span style={{padding: '3px'}}>•</span>;
    return (
        <div className={classes.card}>
            <Card>
                <CardContent>
                    <Typography variant="h6" color="secondary">
                        Summary
                    </Typography>
                    <hr />
                    <Typography variant="subtitle1" color="secondary">
                        {bull}Total Notes : {props.summary.totalNotes}
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
