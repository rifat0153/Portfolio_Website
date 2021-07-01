import { makeStyles } from "@material-ui/core";
import profileBg from '../../static/images/pro_bg2.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        // backgroundImage: `url(${profileBg})`,
        backgroundColor: theme.palette.background.paper,
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: theme.spacing(2),
        // height: '500px',
        width: '100vw',
    },
    avatarGrid: {
        width: '100vw',
        background: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarImg: {
        height: theme.spacing(25),
        width: theme.spacing(25),
        // marginBottom: theme.spacing(2),
        // marginTop: theme.spacing(2),

    },
    nameGrid: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // transform: 'translate(0px, -50%)',
    },
    nameItemGrid: {
        borderRadius: '10px',
        padding: theme.spacing(4),
        marginBottom: theme.spacing(2),
        // color: 'lightgrey',
        background: theme.palette.background.paper,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // width: '80%',
    },
}))

export default useStyles;