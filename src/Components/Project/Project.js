import { Grid, Typography, Grow, Fade } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'
import app1_1 from '../../static/images/app1_1.png';
import app1_2 from '../../static/images/app1_2.png';


export default function Project() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid container className={classes.root} spacing={0}>

                <Grid item container className={classes.insideGrid} spacing={0}>
                    <Grid container item sm={10} md={5} style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Fade in={true}
                            style={{ transformOrigin: '0 0 0' }}
                            {...({ timeout: 2000 })}
                        >
                            <Grid item sm={6} md={4} className={classes.appGrid}  >
                                <img className={classes.image} src={app1_2} alt="a" />
                            </Grid>
                        </Fade>
                        <Fade in={true}
                            style={{ transformOrigin: '0 0 0' }}
                            {...({ timeout: 2000 })}
                        >
                            <Grid item sm={6} md={4} className={classes.appGrid}  >
                                <img className={classes.image} src={app1_1} alt="b" />
                            </Grid>
                        </Fade>
                        {/* 
                        <Grid item sm={6} md={4} className={classes.appGrid} >
                            <img className={classes.image} src={app1_1} alt="a" />
                        </Grid> */}
                    </Grid>
                    <Grid container item sm={10} md={3}  >
                        <Grid item className={classes.appDescription}>
                            <Typography variant='h3'>Alokito</Typography>
                            <Typography variant='subtitle1'>An android and ios application for charity.<br />See people who are donating food and gifts, also ask for food in the same app</Typography>
                            <Typography variant='h5' style={{ marginTop: 10 }}>Technology</Typography>
                            <Typography variant='subtitle2' style={{ marginTop: 10 }}>Alokito is build with Flutter and Firebase for realtime location based query for nearby gifts and show those gifts in google maps with markers and distance from user</Typography>
                        </Grid>
                    </Grid>
                    {/* <Grid container item spacing={0}>
                        <Grid item>
                            <Typography>
                                Hello
                            </Typography>
                        </Grid>
                    </Grid> */}
                </Grid>

            </Grid>
        </React.Fragment >
    )
}
