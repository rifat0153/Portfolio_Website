import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'
import app1_1 from '../../static/images/app1_1.png';
import app1_2 from '../../static/images/app1_2.png';


export default function Project() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid container className={classes.root}>
                <Grid item>
                    <Grid container className={classes.insideGrid} spacing={2}>
                        <Grid container item sm={10} md={5} style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Grid item sm={6} md={4} className={classes.appGrid}  >
                                <img className={classes.image} src={app1_2} alt="a" />
                            </Grid>
                            <Grid item sm={6} md={4} className={classes.appGrid} >
                                <img className={classes.image} src={app1_1} alt="a" />
                            </Grid>
                        </Grid>
                        <Grid container item sm={10} md={3}  >
                            <Grid item className={classes.appDescription}>
                                <Typography variant='h3'>Alokito</Typography>
                                <Typography variant='subtitle1'>An android and ios application for charity.<br />See people who are donating food and gifts, also ask for food in the same app</Typography>
                                <Typography variant='h5' style={{ marginTop: 10 }}>Technology</Typography>
                                <Typography variant='subtitle2' style={{ marginTop: 10 }}>Alokito is build with Flutter and Firebase for realtime location based query for nearby gifts and show those gifts in google maps with markers and distance from user</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
