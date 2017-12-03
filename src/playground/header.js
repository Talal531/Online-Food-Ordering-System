import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const info = {
    title: "foodMasty",
}



const styles = theme => ({
    root: {
       // marginTop: theme.spacing.unit * 3,
        width: '100%',
        fontSize: 24,
        backgroundColor: "#24a452cc",
        fontFamily: "serif",
        
    },
    flex: {
        flex: 1,
        fontSize: 24,
        marginLeft: 100,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    loginButton: {
        marginRight: 100,
        fontSize: "1.41rem",
    }
});

const ButtonAppBar = (props)  => {
    const {classes} = props;
    console.log(classes)
    
    return (
        <div >
            <AppBar position="static" className={classes.root}>
                <Toolbar>
                    {/* <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
                        <MenuIcon/>
                    </IconButton> */}
                    <Typography type="title" color="inherit" className={classes.flex}>
                        {info.title}
                    </Typography>
                    <Button className={classes.loginButton} color="contrast">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);