import { Typography } from '@material-ui/core';
import { Avatar, Grid } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'

import profileImg from '../../static/images/profile.jpg';

export default function Profile() {
    const classes = useStyles();

    return (
        <>
            <Grid container className={classes.root} spacing={2} >
                <Grid item lg={12} className={classes.avatarGrid} >
                    <Avatar className={classes.avatarImg} alt="Remy Sharp" src={profileImg} />
                </Grid>

                <Grid item className={classes.nameItemGrid}  >
                    <Typography variant='h4'>Mahbubur Rahman</Typography>
                    <Typography variant='subtitle1'>Flutter Developer</Typography>
                    <Typography variant='subtitle2'>Web Developer</Typography>
                </Grid>

            </Grid>
            {/* <Grid container className={classes.nameGrid}>
                <Grid item className={classes.nameItemGrid}  >
                    <Typography variant='h4'>Mahbubur Rahman</Typography>
                    <Typography variant='subtitle2'>Flutter Developer</Typography>
                </Grid>
            </Grid> */}
        </>
    )
}
