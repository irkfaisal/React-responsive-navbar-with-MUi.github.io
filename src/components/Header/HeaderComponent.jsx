import React,{useState} from 'react';
import Navbar from './Navbar';
import Sidenav from './Sidenav';
import { Routes, Route } from "react-router-dom";
import StudentDetails from '../BodyComponent/StudentDetails';
import Exam from '../BodyComponent/Exam';
import Notice from '../BodyComponent/Notice';
import Dashboard from '../BodyComponent/Dashboard/Dashboard';
import Contact from '../BodyComponent/Contactus';
import Logout from '../BodyComponent/Logout';
import {Box} from '@material-ui/core';
import {useStyles} from './HeaderStyle';
//  


export default function HeaderComponent() {
    const classes = useStyles();

    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerOpen = () => {
        setMobileOpen(!mobileOpen);   
    }
    return (
        <div>
            <Navbar  handleDrawerOpen={handleDrawerOpen} />
            <Sidenav mobileOpen={mobileOpen} handleDrawerOpen={handleDrawerOpen} />
            {/* routing routes */}
           <Box className={classes.wrapper}>
           <Routes>
          <Route exact path='/studentdeatils' render={() => <StudentDetails />} />
          <Route exact path='/exam' render={() => <Exam />} />
          <Route exact path='/notice' render={() => <Notice />} />
          <Route exact path='/logout' render={() => <Logout />} />
          <Route exact path='/contactus' render={() => <Contact />} />
          <Route path='/' component={<Dashboard />} />
        </Routes>
           </Box>
        </div>
    )
}