import { Typography } from '@material-ui/core';
import { Avatar, Grid } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'

import profileImg from '../../static/images/profile.jpg';

export default function Profile() {
    const classes = useStyles();

    return (
        <>
            <Grid container className={classes.root}>
                <Grid item lg={12} className={classes.avatarGrid} >
                    <Avatar className={classes.avatarImg} alt="Remy Sharp" src={profileImg} />
                </Grid>
                <Grid item lg={12} className={classes.nameGrid}  >
                    <Typography variant='h4'>Mahbubur Rahman</Typography>
                    <Typography variant='h5'>Flutter Developer</Typography>
                </Grid>
            </Grid>
        </>
    )
}
