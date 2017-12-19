import React from 'react';
import firebase from 'firebase';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { Button } from 'material-ui';
import "../firebase/firebaseConf";
import Signup from "./signup"
// import IconButton from 'material-ui/IconButton';
// import MenuIcon from 'material-ui-icons/Menu';

import TextField from 'material-ui/TextField';
import Dialog, { DialogActions, DialogContent, DialogContentText, DialogTitle } from 'material-ui/Dialog';

import { Link } from 'react-router-dom';


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

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.googleSignin = this.googleSignin.bind(this);
        this.state = {
            open: false,
        }

    }


    handleClickOpen = () => this.setState({ open: true })
    handleClickClose = () => this.setState({ open: false })

    //Login for firebase authentication
    login = (event) => {
        console.log("login function clicked.!")
        const email = this.refs.email.value;
        const password = this.refs.password.value;
        console.log(email, password);
        const auth = firebase.auth();
        let promise = auth.signInWithEmailAndPassword(email, password);
        promise
            .then(redirect => {
                window.location = 'http://localhost:3000/                         '
            })
            .catch(e => {
                let err = e.message;
                console.log(err);
                this.setState({
                    err: err
                });
            })
    }
    //firebase login ended..

    //Google Signin authentication with firebase
    googleSignin = () => {

        const provider = new firebase.auth.GoogleAuthProvider();
        const promise = firebase.auth().signInWithPopup(provider);
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        promise
            .then(result => {
                let err = `Wellcome  in Our Application`;
                let user = result.user;

                firebase.database().ref(`users/${user.uid}`).set({
                    Name: user.displayName,
                    Email: user.email
                })
                function func() {
                    window.location = "http://localhost:3000";
                }
                setTimeout(func, 3000);
                console.log(user);
            })
        promise.catch(e => {
            let err = e.message;
            console.log(err);
        })
    }
    //Google Signin authentication with firebase ended..



    render() {
        return (
            <div>
                {/* <Button onClick={this.signup}>Create Account</Button> */}
                <Button onClick={this.handleClickOpen}>Login</Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClickClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle>Login to foodMasty

                </DialogTitle>
                    <DialogContent>
                        <input
                            margin="dense"
                            id="email" ref="email" type="email" placeholder="Enter Your Email"
                        ></input>
                        <input
                            margin="dense"
                            id="password" ref="password" type="password" placeholder="Enter Your Password"
                        ></input>

                        <Button margin="dense" fullWidth raised color="primary" onClick={this.login}>Login</Button>
                        <Button margin="dense" fullWidth raised style={{ backgroundColor: 'red', color: 'white' }} onClick={this.googleSignin}>SIgnin with Google</Button>
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
    const { classes } = props;
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
                                textDecoration: 'none',
                                fontFamily: 'Monoton'
                            }}>{info.title}</Link>
                    </Typography>
                    {/* <Link key={"buttonLogin"} to="/login">
                        <Button>Login</Button>
                    </Link> */}
                    <Signup />
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