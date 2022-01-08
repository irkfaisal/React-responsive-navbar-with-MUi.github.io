import React, { useState } from 'react';
import { Menu, MenuItem, IconButton, ListItemIcon, ListItem, Box, Badge, Avatar, ListItemText, List } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useStyles } from '../HeaderStyle';

export default function Notification() {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const dropDownData = [
        { label: " Faisal", disc: "You have one notification" },
        { label: " Faisal", disc: "You have one alert" },
        { label: " Faisal", disc: "You have one notification" },
    ]
    return (
        <Box>
            <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} color="inherit">
                <Badge badgeContent={4} color="secondary">
                    <NotificationsIcon />
                </Badge>
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <List className={classes.navlist}>
                    {dropDownData.map((item, i) => <ListItem key={i} onClick={handleClose}>
                        <ListItemIcon>
                            <Avatar className={classes.ulAvater}>{item.label[0].toUpperCase()}</Avatar>
                        </ListItemIcon>
                        <ListItemText
                            primary={item.label}
                            secondary={item.desc}></ListItemText>
                    </ListItem>)}
                </List>
            </Menu>
        </Box>
    )
}