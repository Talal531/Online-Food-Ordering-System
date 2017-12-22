import React from 'react';
import firebase from 'firebase';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import {Button} from 'material-ui';
import "../firebase/firebaseConf";
import TextField from 'material-ui/TextField';
import Dialog, {DialogActions, DialogContent, DialogContentText, DialogTitle} from 'material-ui/Dialog';
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
    }, 
    button:{
        color: '#fff',
        fontSize: 14,
        border: '1px solid #eee',
        borderRadius: 4,

    }
});
const buttonStyle = {
    button: {
        color: 'white',
        fontSize: 14,
        border: '1px solid #eee',
        borderRadius: 4,
        marginRight: 5
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    input: {
        margin: 8,
        fontSize: 14,
        padding: '15px',
        outline: 'none',
        border: '1px solid #ccc',
        borderRadius: '4px',
        width: '100%'
    },
    buttonn: {
        width: '100%',
        color: 'white',
        fontSize: 12,
        marginBottom: 8
    }

}
class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.login = this
            .signup
            .bind(this);
        this.googleSignin = this
            .googleSignin
            .bind(this);

        this.state = {
            open: false
        }

    }

    handleClickOpen = () => this.setState({open: true})
    handleClickClose = () => this.setState({open: false})

    //Signup for firebase authentication
    signup = (event) => {
        const email = this.refs.email.value;
        const password = this.refs.password.value;
        const name = this.refs.name.value;

        console.log(email, password)
        const auth = firebase.auth();
        let promise = auth.createUserWithEmailAndPassword(email, password);
        promise.then(user => {
            // let lout = document.getElementById('logout');
            // lout
            //     .classList
            //     .remove('hid');
            let err = `Wellcome ${user.email} in Our Application`;

            firebase
                .database()
                .ref(`users/${user.uid}`)
                .set({email: user.email, password: password, name: name});
            function func() {
                window.location = "http://localhost:3000/";
            }
            setTimeout(func, 2000);

            // window.location = "http://localhost:3000/"; console.log(user);
            this.setState({err: err})
        })
        promise.catch(e => {
            let err = e.message;
            // console.log(err);
            this.setState({err: err});
        })
    }
    //firebase signup ended.. Google Signin authentication with firebase
    googleSignin = () => {

        const provider = new firebase
            .auth
            .GoogleAuthProvider();
        const promise = firebase
            .auth()
            .signInWithPopup(provider);
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        promise.then(result => {
            let err = `Wellcome  in Our Application`;
            let user = result.user;

            firebase
                .database()
                .ref(`users/${user.uid}`)
                .set({Name: user.displayName, Email: user.email})
            function func() {
                window.location = "http://localhost:3000";
            }
            setTimeout(func, 5000);
            console.log(user);
        })
        promise.catch(e => {
            let err = e.message;
            console.log(err);
        })
    }
    //Google Signin authentication with firebase ended..

    render() {
        const { classes } = this.props;
        return (
            <div>
                {/* <Button onClick={this.signup}>Create Account</Button> */}
                {/* <Button onClick={this.handleClickOpen} className="hide" id="logout">Logout</Button> */}
                <Button onClick={this.handleClickOpen} className={classes.button}>Create Account</Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClickClose}
                    aria-labelledby="form-dialog-title">
                    <DialogTitle><h2>Register with foodMasty</h2> </DialogTitle>
                    <DialogContent>
                        <input
                            style={buttonStyle.input}
                            margin="dense"
                            id="name"
                            ref="name"
                            type="name"
                            placeholder="Enter Your Name"></input>
                        <input
                            style={buttonStyle.input}
                            margin="dense"
                            id="email"
                            ref="email"
                            type="email"
                            placeholder="Enter Your Email"></input>
                        <input
                            style={buttonStyle.input}
                            margin="dense"
                            id="password"
                            ref="password"
                            type="password"
                            placeholder="Enter Your Password"></input>

                        <Button style={buttonStyle.buttonn} margin="dense" fullWidth raised color="primary" onClick={this.signup}>Signup</Button>
                        <br/>
                            <p style={{textAlign: 'center'}}><b>OR</b></p>
                        <Button
                            style={buttonStyle.buttonn}
                            margin="dense"
                            fullWidth
                            raised
                            style={{
                            backgroundColor: 'red',
                            color: 'white',
                            fontSize: 12,
                            width:'100%'
                        }}
                            onClick={this.googleSignin}>Login to Google</Button>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClickClose} color="primary">Close</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

SignUp.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignUp);