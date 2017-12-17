import React from 'react';

import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import {Button} from 'material-ui';
// import IconButton from 'material-ui/IconButton';
// import MenuIcon from 'material-ui-icons/Menu';

import TextField from 'material-ui/TextField';
import Dialog, {DialogActions, DialogContent, DialogContentText, DialogTitle} from 'material-ui/Dialog';

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

class SignIn extends React.Component  {
    state={
        open: false,
    }

    handleClickOpen = () => this.setState({open:true})
    handleClickClose = () => this.setState({open:false})

    render(){
        return(
            <div>
                <Button onClick={this.handleClickOpen}>Login</Button>
                <Dialog
                open={this.state.open}
                onClose={this.handleClickClose}
                aria-labelledby="form-dialog-title"
                >
                <DialogTitle>Login to foodMasty
                
                </DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        id="email"
                        label="Enter Your Email"
                        type="email"
                        fullWidth
                    ></TextField>
                    <TextField
                        margin="dense"
                        id="password"
                        label="Enter Your Password"
                        type="password"
                        fullWidth
                    ></TextField>

                    <Button margin="dense" fullWidth raised color="primary">Login</Button>
                    <Button margin="dense" fullWidth raised style={{backgroundColor:'red', color: 'white'}}>Login to Google</Button>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClickClose} color="primary">Close</Button>
                </DialogActions>
                </Dialog>
            </div>
        )
    }
}


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
                            key={info.title}
                            to="/"
                            exact={true}
                            style={{
                            color: '#fff',
                            textDecoration: 'none'
                        }}>{info.title}</Link>
                    </Typography>
                    {/* <Link key={"buttonLogin"} to="/login">
                        <Button>Login</Button>
                    </Link> */}
                    <SignIn />
                </Toolbar>
            </AppBar>
        </div>
    );
}

Header.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);