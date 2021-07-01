import { Grid } from '@material-ui/core';
import React from 'react'
import Header from '../Components/Header/Header'
import Project from '../Components/Project/Project';
import Profile from './../Components/Profile/Profile';
import useStyles from './styles';

export default function Landing() {

    const classes = useStyles()

    return (
        <Grid container className={classes.root} spacing={0} >

            <Grid item sm={12}>
                <Header />
            </Grid>
            <Grid item sm={12}>
                <Profile />
            </Grid>
            {/* <Grid item sm={12}>
                <Project />
            </Grid> */}
            {/* <Grid item style={{ height: '1000px', backgroundColor: 'blueviolet', width: '100vw' }} >

            </Grid> */}
            <Project />
        </Grid>
    )
}
