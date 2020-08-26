import React from 'react'
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    card: {
        margin: '15px'
    }
})

const Summary = () => {
    const classes = useStyles()
    return (
        <div className={classes.card}>
            <Card>
                <CardContent>
                    <Typography variant="subtitle1">
                        Summary
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Summary
