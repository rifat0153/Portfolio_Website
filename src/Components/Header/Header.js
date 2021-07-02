import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import useStyles from './styles';
import { Link } from 'react-router-dom'
function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

export default function Header(props) {
    const classes = useStyles()

    return (
        <React.Fragment>
            <HideOnScroll {...props}>
                <AppBar elevation={10} className={classes.appbar}  >
                    <Toolbar>
                        <Typography variant="h6" style={{ flexGrow: 1 }}  >Mahbubur Rahman</Typography>
                        <Typography className={classes.menuItem}  >
                            <Link to='/about' style={{ color: 'black', textDecoration: 'none' }}>
                                About
                            </Link>
                        </Typography>
                        <Typography className={classes.menuItem}  >
                            <Link to='/about' style={{ color: 'black', textDecoration: 'none' }}>
                                Contact
                            </Link>
                        </Typography>
                    </Toolbar>

                </AppBar>
            </HideOnScroll>
            <Toolbar />
        </React.Fragment>
    );
}