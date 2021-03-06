import { Grid } from '@material-ui/core';
import React from 'react'
import Header from '../Components/Header/Header'
import Project from '../Components/Project/Project';
import Profile from './../Components/Profile/Profile';
import useStyles from './styles';
import ProjectList from './../Components/Project/ProjectList';

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
            <ProjectList />
        </Grid>
    )
}
