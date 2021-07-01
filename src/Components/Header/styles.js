import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    appbar: {
        background: '#b1c7b7',
        color: 'black',
    },
    menuItem: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
    }
}))

export default useStyles;