import { makeStyles } from "@material-ui/core";
import profileBg from '../../static/images/pro_bg2.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(${profileBg})`,
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // height: '500px',
        // width: '100%',
    },
    avatarGrid: {
        background: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '350px',
    },
    avatarImg: {
        height: theme.spacing(20),
        width: theme.spacing(20),
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(2),

    },
    nameGrid: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    nameItemGrid: {
        background: 'orange',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // width: '80%',
    },
}))

export default useStyles;