import React, { Component } from 'react';

// import {Form, FormGroup, FormControl, Col, Checkbox,Button} from
// 'react-bootstrap';

import Model from 'react-bootstrap/lib/Modal';
import ModalHeader from 'react-bootstrap/lib/ModalHeader';
import ModalTitle from 'react-bootstrap/lib/ModalTitle';
import ModelBody from 'react-bootstrap/lib/ModalBody';
import { Button } from 'react-bootstrap'

const _container = {
    backgroundColor: "#fff",
    marginTop: "10px",
    padding: "20px",
}

class Login extends Component {
    constructor(props) {
        super(props);
        

        this.state = {
            name: '',
            password: ''
        }
    }
 
    render() {
        return (
            <div className="container" style={_container}>
                <h3>Login to Food Masty</h3><hr />


                <div class="form-group">
                    {/* <label for="exampleInputEmail1">Email address</label> */}
                    <input
                        className="form-control" id="email" ref="email" type="email" placeholder="Enter Your Email"
                    />
                </div>

                <div class="form-group">
                    {/* <label for="exampleInputPassword1">Password</label> */}
                    <input
                        id="password" ref="password" type="password" placeholder="Enter Your Password" className="form-control" />
                </div>
                <button class="btn btn-primary" onClick={this.login}>Submit</button>


            </div>
        )
    }
}
export default Login;