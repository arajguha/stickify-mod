import React, { useState } from 'react'
import { AppBar, Typography, Button, Toolbar, makeStyles, Dialog, DialogTitle, DialogContent } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      margin: 'auto'
    },
}));
const Header = () => {
    const classes = useStyles()
    const [about, setAbout] = useState(false)
    
    const handleClose = () => {
        setAbout(false)
    }

    return (
        <>
            <AppBar color="secondary">
                <Toolbar>
                    <Typography className={classes.title} variant="h4">Stickify</Typography>
                    <Button color="inherit" onClick={() => setAbout(true)}>About</Button>
                </Toolbar>
            </AppBar>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={about}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose} >
                    <Typography color="secondary" variant="h4">About</Typography>
                </DialogTitle>
                <DialogContent dividers>
                    <Typography style={{paddingBottom: '10px'}}>
                        <strong>Stickify</strong> is a browser based modern react application to create your own sticky notes. 
                        It is written using 
                        React hooks and the react material-ui library. It is not integrated with a database in the backend.
                        The application state is managed using Redux store. Deployed using netlify.
                        The source code is available on  
                        <a href="https://github.com/arajguha/stickify-mod" target="_blank" rel="noopener noreferrer">Github</a>
                    </Typography>
                </DialogContent>

            </Dialog>
        </>
    )
}

export default Header
