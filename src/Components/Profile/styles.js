import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'lightgrey',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // height: '300px',
        // width: '100%',
    },
    avatarGrid: {
        background: 'lightblue',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // height: '250px',
    },
    avatarImg: {
        height: theme.spacing(20),
        width: theme.spacing(20),
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(2),

    },
    nameGrid: {
        background: 'orange',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // padding: theme.spacing(6),
    },
}))

export default useStyles;