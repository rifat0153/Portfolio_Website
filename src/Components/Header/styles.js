import { makeStyles } from "@material-ui/core";




const useStyles = makeStyles((theme) => ({
    appbar: {
        background: '#a33494',
        color: 'white'
    },
    menuItem: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
    }
}))

export default useStyles;