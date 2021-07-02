import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    // div: {
    //     clipPath: 'polygon(0 0, 100% 8%, 100% 82%, 0% 100%)',
    // },
    root: {
        // height: 600,
        backgroundColor: '#D3D3D3',
        display: 'flex',
        paddingTop: 80,
        paddingBottom: 80,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        clipPath: 'polygon(0 0, 100% 10%, 100% 90%, 0% 100%)',
        [theme.breakpoints.down('sm')]: {
            clipPath: 'polygon(0 0, 100% 2%, 100% 98%, 0% 100%)',
            paddingTop: 50,
            paddingBottom: 0,
        },
    },
    insideGrid: {
        backgroundColor: 'tranparent',
        display: 'flex',
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
            paddingLeft: 40,
            paddingRight: 40,
        },
        width: '100%',
        backgroundColor: 'transparent',
        borderRadius: '20px',
        padding: theme.spacing(2),
    },
    image: {
        height: '100%',
        // border: '2px solid orange',
        boxShadow: '3px 3px 2px 2px lightblue',
        width: '100%',
        borderRadius: '20px',
    },
    appDescription: {
        paddingBottom: theme.spacing(8),
        // height: '100%',
        // [theme.breakpoints.down('sm')]: {
        //     height: 350,
        // },
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'start',
        padding: theme.spacing(2),
    },
    techRow: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
}))

export default useStyles;

