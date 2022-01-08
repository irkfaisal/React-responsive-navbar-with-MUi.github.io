import React from "react";
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button,
  } from "@material-ui/core";

  import AccountBoxIcon from '@material-ui/icons/AccountBox';

import DashboardIcon from "@material-ui/icons/Dashboard";
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { NavLink } from "react-router-dom";
import { useStyles } from "./HeaderStyle";

export default function SidenavData() {
    const classes = useStyles();
  const listItemData = [
    { label: "Dashobard", link: "/", icon: <DashboardIcon /> },
    { label: "Student Details", link: "/studentdeatils", icon: <AccountBoxIcon /> },
    { label: " Start Exam ", link: "#", icon: <NoteAddIcon /> },
    { label: "Exam Demo", link: "/exam", icon: <OndemandVideoIcon /> },
    { label: "Notice", link: "/notice", icon: <NotificationsActiveIcon /> },
    { label: "Contact us", link: "/contactus", icon: <ContactMailIcon /> },
    { label: "Logout", link: "/logout", icon: <ExitToAppIcon /> },
  ];
    return (
        <List>
        {listItemData.map((item, i) => (
          <Button
            size='small'
            className={classes.navButton}
            // onClick={() => handleDrawerClose()}
            key={i}>
            <ListItem
              exact
              component={NavLink}
              to={item.link}
              className={classes.navlinks}
              activeClassName={classes.activeNavlinks}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.label}</ListItemText>
            </ListItem>
          </Button>
        ))}
      </List>
    )
}