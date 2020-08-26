import React from 'react'
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    card: {
        margin: '15px'
    }
})

const NotificationTray = () => {
    const classes = useStyles()
    return (
        <div className={classes.card}>
            <Card>
                <CardContent>
                    <Typography variant="subtitle1">
                        Notifications
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default NotificationTray
