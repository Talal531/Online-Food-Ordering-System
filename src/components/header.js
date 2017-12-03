import React from 'react';

import LoginButton from './loginButton';

import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

// import IconButton from 'material-ui/IconButton';
// import MenuIcon from 'material-ui-icons/Menu';

import {Link} from 'react-router-dom';


const info = {
    title: "foodMasty"
}

const styles = theme => ({
    root: {
        // marginTop: theme.spacing.unit * 3,
        width: '100%',
        fontSize: 24,
        backgroundColor: "#24a452cc",
        fontFamily: "serif"
    },
    flex: {
        flex: 1,
        fontSize: 24,
        marginLeft: 100
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    loginButton: {
        marginRight: 100,
        fontSize: "1.41rem"
    }
});

const Header = (props) => {
    const {classes} = props;
    return (
        <div >
            <AppBar position="static" className={classes.root}>
                <Toolbar>
                    {/* <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
                        <MenuIcon/>
                    </IconButton> */}
                    <Typography type="title" color="inherit" className={classes.flex}>
                        <Link
                            to="/"
                            exact={true}
                            style={{
                            color: '#fff',
                            textDecoration: 'none'
                        }}>{info.title}</Link>
                    </Typography>
                    <LoginButton />
                </Toolbar>
            </AppBar>
        </div>
    );
}

Header.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);