import { Grid } from '@material-ui/core';
import React from 'react'
import Header from '../Components/Header/Header'
import Profile from './../Components/Profile/Profile';
import useStyles from './styles';

export default function Landing() {

    const classes = useStyles()

    return (
        <Grid container className={classes.root}>
            <Header />
            <Profile />
        </Grid>
    )
}
