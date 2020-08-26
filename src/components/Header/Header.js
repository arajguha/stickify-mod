import React from 'react'
import { AppBar, Typography } from '@material-ui/core'
import classes from './Header.module.css'

const Header = () => {
    return (
        <AppBar className={classes.Header} color="secondary">
            <Typography  variant="h4">Stickify</Typography>
        </AppBar>
    )
}

export default Header
