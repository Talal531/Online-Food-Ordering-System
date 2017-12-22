// import React from 'react';

// import PropTypes from 'prop-types';
// import {withStyles} from 'material-ui/styles';
// import AppBar from 'material-ui/AppBar';
// import Toolbar from 'material-ui/Toolbar';
// import Typography from 'material-ui/Typography';
// import {Button} from 'material-ui';
// // import IconButton from 'material-ui/IconButton';
// // import MenuIcon from 'material-ui-icons/Menu';

// import TextField from 'material-ui/TextField';
// import Dialog, {DialogActions, DialogContent, DialogContentText, DialogTitle} from 'material-ui/Dialog';

// import {Link} from 'react-router-dom';


// const info = {
//     title: "foodMasty"
// }

// const styles = theme => ({
//     root: {
//         // marginTop: theme.spacing.unit * 3,
//         width: '100%',
//         fontSize: 24,
//         backgroundColor: "#24a452cc",
//         fontFamily: "serif"
//     },
//     flex: {
//         flex: 1,
//         fontSize: 24,
//         marginLeft: 100
//     },
//     menuButton: {
//         marginLeft: -12,
//         marginRight: 20
//     },
//     loginButton: {
//         marginRight: 100,
//         fontSize: "1.41rem"
//     }
// });

// class SignIn extends React.Component  {
//     state={
//         open: false,
//     }

//     handleClickOpen = () => this.setState({open:true})
//     handleClickClose = () => this.setState({open:false})

//     render(){
//         return(
//             <div>
//                 <Button onClick={this.handleClickOpen}>Login</Button>
//                 <Dialog
//                 open={this.state.open}
//                 onClose={this.handleClickClose}
//                 aria-labelledby="form-dialog-title"
//                 >
//                 <DialogTitle>Login to foodMasty
                
//                 </DialogTitle>
//                 <DialogContent>
//                     <TextField
//                         margin="dense"
//                         id="email"
//                         label="Enter Your Email"
//                         type="email"
//                         fullWidth
//                     ></TextField>
//                     <TextField
//                         margin="dense"
//                         id="password"
//                         label="Enter Your Password"
//                         type="password"
//                         fullWidth
//                     ></TextField>

//                     <Button 
//                         margin="dense" 
//                         fullWidth 
//                         raised 
//                         color="primary"
                        
//                         >
//                         Login</Button>
//                     <Button margin="dense" fullWidth raised style={{backgroundColor:'red', color: 'white'}}>Login to Google</Button>
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={this.handleClickClose} color="primary">Close</Button>
//                 </DialogActions>
//                 </Dialog>
//             </div>
//         )
//     }
// }


// const Header = (props) => {
//     const {classes} = props;
//     return (

//         <div >
//             <AppBar position="static" className={classes.root}>
//                 <Toolbar>
//                     {/* <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
//                         <MenuIcon/>
//                     </IconButton> */}
//                     <Typography type="title" color="inherit" className={classes.flex}>
//                         <Link
//                             key={info.title}
//                             to="/"
//                             exact={true}
//                             style={{
//                             color: '#fff',
//                             textDecoration: 'none',
//                             fontFamily: 'Monoton'
//                         }}>{info.title}</Link>
//                     </Typography>
//                     {/* <Link key={"buttonLogin"} to="/login">
//                         <Button>Login</Button>
//                     </Link> */}
//                     <SignIn />
//                 </Toolbar>
//             </AppBar>
//         </div>
//     );
// }

// Header.propTypes = {
//     classes: PropTypes.object.isRequired
// };

// export default withStyles(styles)(Header);


/////////////////////////////////////////////////////////////////////////////////////////////////////////


import React from 'react';
// import firebase from 'firebase';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import {Button} from 'material-ui';
// import "../firebase/firebaseConf";
import firebase, {auth, provider} from '../firebase/firebaseConf';
import Signup from "./signup"
// import IconButton from 'material-ui/IconButton'; import MenuIcon from
// 'material-ui-icons/Menu';
import Input from 'material-ui/Input';
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
        fontSize: "1.41rem",
    },
   
});
const buttonStyle = {
        button:{
        color: 'white',
        fontSize: 14,
        border: '1px solid #eee',
        borderRadius: 4,
        marginRight: 5,
        }, 
         container: {
            display: 'flex',
            flexWrap: 'wrap',

        },
        input: {
            margin: 8,
            fontSize: 14,
            padding:'15px',
            outline: 'none',
            border: '1px solid #ccc',
            borderRadius: '4px',
            width:'100%'
        },
        buttonn: {
            width: '100%',
            color: 'white',
            fontSize: 12,
            marginBottom: 8,

        }
        
    }

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.login = this
            .login
            .bind(this);
        this.googleSignin = this
            .googleSignin
            .bind(this);

        this.state = {
            open: false,
            user: null,
            userName: '',
        }

    }

    handleClickOpen = () => this.setState({open: true})
    handleClickClose = () => this.setState({open: false})








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
                this.setState({err: err});
            })
    }
    //firebase login ended.. Google Signin authentication with firebase
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
            ////////////////////////
            this.setState({
                user,
            })
            //////////////////
            firebase
                .database()
                .ref(`users/${user.uid}`)
                .set({Name: user.displayName, Email: user.email})
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

    /////////////////////////////////////////////////////

      logout = () => {

        firebase
            .auth()
            .signOut()
            .then(() => {
                console.log("I m Logout button");
                // document.location.href =
                // "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/
                // _ah/logout?continue=http://localhost:3000";
                let newWindow = window.open('https://mail.google.com/mail/?logout&hl=en', 'Disconnect from Google', 'width=500,height=600,menubar=no,status=no,location=no,toolbar=no,scrollbars=no,t' +
                        'op=200,left=200');
                setTimeout(function () {
                    if (newWindow) 
                        newWindow.close();
                    window.location = "http://localhost:3000";
                }, 3000);

            })
            .catch(e => {
                console.log("Error in Logout button")
            })
    };
    //firebase logout ended..
////////////////////////////////////////////////

    componentDidMount(){
        auth.onAuthStateChanged((user)=>{
            if(user){
                this.setState({user})
            }
        })
    }




    /////////////////////////////////

    render() {

        return (
            <div>
                {/* <Button onClick={this.signup}>Create Account</Button> */}
                {console.log(this)}
                {this.state.user ? 
                <Button style={buttonStyle.button} onClick={this.logout}>logout</Button>
                :
                <Button style={buttonStyle.button} onClick={this.handleClickOpen}>Login</Button>
                }
                <Dialog
                   style={buttonStyle.container}
                    open={this.state.open}
                    onClose={this.handleClickClose}
                    aria-labelledby="form-dialog-title">
                    <DialogTitle><h2>Login to foodMasty</h2></DialogTitle>
                    <DialogContent>
                        <input
                           style={buttonStyle.input}
                            fullWidth
                            id="email"
                            ref="email"
                            type="email"
                            placeholder="Enter Your Email" /><br/><br/>
                        <input
                           style={buttonStyle.input}
                            fullWidth
                            id="password"
                            ref="password"
                            type="password"
                            placeholder="Enter Your Password" /><br/><br/>

                        <Button style={buttonStyle.buttonn} fullWidth raised color="primary" onClick={this.login}>Login</Button>
                        <br/>
                            <p style={{textAlign: 'center'}}><b>OR</b></p>
                        <Button 
                            style={buttonStyle.buttonn}
                            raised
                            style={{
                            backgroundColor: 'red',
                            color: 'white',
                            fontSize: 12,
                            width:'100%'
                        }}
                            onClick={this.googleSignin}>Sign in with Google</Button>
                    </DialogContent>
                    <DialogActions>
                        <Button  onClick={this.handleClickClose} color="primary">Close</Button>
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
                            textDecoration: 'none',
                            fontFamily: 'Monoton'
                        }}>{info.title}</Link>
                    </Typography>
                   
                    <SignIn/>
                    <Signup/>
                </Toolbar>
            </AppBar>
        </div>
    );
}

Header.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);