import React, { useState } from 'react';
import { Menu, MenuItem, Button, Box,  ListItemIcon, ListItem, Avatar } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Image1 from './myimg.jpeg';
import { useStyles } from '../HeaderStyle';

export default function Profile() {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const dropDownData = [
        { label: "setting", icon: <SettingsIcon /> },
        { label: "logout", icon: <ExitToAppIcon /> }
    ]
    return (
        <Box>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                {<Avatar className={classes.navAvatar} src={Image1}></Avatar>}
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {dropDownData.map((item, i) => <MenuItem key={i} component={ListItem} onClick={handleClose}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemIcon>{item.label}</ListItemIcon>
                </MenuItem>)}

            </Menu>
        </Box>
    )
}