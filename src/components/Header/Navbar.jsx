import React from 'react';
import { AppBar, Box, Hidden, IconButton, Toolbar, Typography } from '@material-ui/core';
import Profile from './NavTab/Profile';
import Notification from './NavTab/Notification';
import Messages from './NavTab/Messages';
import MenuIcon from "@material-ui/icons/Menu";
import { useStyles } from './HeaderStyle';


export default function Navbar({handleDrawerOpen} ) {
    const classes = useStyles()

    return (
        <div>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" className={classes.logo}>
                        {"Dashboard"}
                    </Typography>
                    <Hidden smDown>
          <Box style={{ display: "flex" }}>
            <Notification />
            <Messages />
            <Profile />
          </Box>
        </Hidden>
        <Hidden mdUp>
          <IconButton color='inherit' onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
                </Toolbar>
            </AppBar>
        </div>
    )
}