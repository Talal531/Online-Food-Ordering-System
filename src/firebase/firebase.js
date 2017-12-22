import React, {Component} from "react";
import firebase from 'firebase';

class Authen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            err: ''
        }
        this.login = this
            .login
            .bind(this);
        this.signup = this
            .signup
            .bind(this);
        this.googleSignin = this
            .googleSignin
            .bind(this);
        this.logout = this
            .logout
            .bind(this);
        firebase
            .auth()
            .onAuthStateChanged(function (user) {
                if (user) {
                    console.log("logged in");
                } else {
                    console.log("logged out")
                }
            });
    }

    //Login for firebase authentication
    login = (event) => {
        const email = this.refs.email.value;
        const password = this.refs.password.value;
        console.log(email, password)
        const auth = firebase.auth();
        let promise = auth.signInWithEmailAndPassword(email, password);
        promise
            .then(redirect => {
            window.location = 'http://localhost:3000/';
        })
            .catch(e => {
                let err = e.message;
                console.log(err);
                this.setState({err: err});
            })
    }
    //firebase login ended.. Signup for firebase authentication
    signup = (event) => {
        const email = this.refs.email.value;
        const password = this.refs.password.value;
        const name = this.refs.name.value;
        console.log(email, password)
        const auth = firebase.auth();
        let promise = auth.createUserWithEmailAndPassword(email, password);
        promise.then(user => {
            let err = `Wellcome ${user.email} in Our Application`;
            firebase
                .database()
                .ref(`users/${user.uid}`)
                .set({email: user.email, password: password, name: name})
            // console.log(user);
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
        // console.log("current user :"+ )
        const provider = new firebase
            .auth
            .GoogleAuthProvider();
        const promise = firebase
            .auth()
            .signInWithPopup(provider);
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        // promise = firebase.auth().reauthenticateWithPopup(provider)
        // provider.setCustomParameters({     prompt: 'select_account' }); let promise =
        // firebase.auth().signInWithRedirect(provider)
        promise.then(result => {

            let err = `Wellcome  in Our Application`;
            let user = result.user;
            firebase
                .database()
                .ref(`users/${user.uid}`)
                .set({Name: user.displayName, Email: user.email})
            console.log(user)
            // console.log(user);
            this.setState({err: err})
        })
        promise.catch(e => {
            let err = e.message;
            // console.log(err);
            this.setState({err: err});
        })
    }
    // Google Signin authentication with firebase ended.. Logout for firebase
    // authentication
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

    render() {
        return (
            <div>
                <input id="name" ref="name" type="text" placeholder="Enter Your Name"/><br/>
                <input id="email" ref="email" type="email" placeholder="Enter Your Email"/><br/>
                <input
                    id="password"
                    ref="password"
                    type="password"
                    placeholder="Enter Your Password"/><br/>
                <p>{this.state.err}</p>
                <button onClick={this.login}>Login</button>
                <button onClick={this.signup}>SignUp</button>
                <button onClick={this.logout}>Logout</button>
                <button onClick={this.googleSignin}>Signin With Google</button>

            </div>
        )
    }
}

export default Authen;