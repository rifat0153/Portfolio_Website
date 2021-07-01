import { makeStyles } from "@material-ui/core";
import app1_1 from '../../static/images/app1_1.png';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#D3D3D3',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        padding: 0,
        width: '100%',
    },
    insideGrid: {
        margin: 20,
        [theme.breakpoints.down('md')]: {
            margin: 0,
        },
        backgroundColor: 'tranparent',
        display: 'flex',
        // opacity: '0.99',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        },
    },
    appGrid: {
        height: 500,
        [theme.breakpoints.down('sm')]: {
            height: 600,
        },
        width: '100%',
        backgroundColor: 'grey',
        borderRadius: '20px',
        margin: theme.spacing(2)
    },
    image: {
        height: '100%',
        border: '2px solid orange',
        boxShadow: '3px 3px 2px 2px #b1c7b7',
        width: '100%',
        borderRadius: '20px',
    },
    appDescription: {
        height: 500,
        width: '100%',
        margin: theme.spacing(2),
        // opacity: '0.8',

    }
}))

export default useStyles;

