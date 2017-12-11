import React, {Component} from 'react';
// import {Form, FormGroup, FormControl, Col, Checkbox,Button} from
// 'react-bootstrap';

import Model from 'react-bootstrap/lib/Modal';
import ModalHeader from 'react-bootstrap/lib/ModalHeader';
import ModalTitle from 'react-bootstrap/lib/ModalTitle';
import ModelBody from 'react-bootstrap/lib/ModalBody';
import {Button} from 'react-bootstrap'

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
                <h3>Login to Food Masty</h3><hr/>

                <form>
                    <div class="form-group">
                        {/* <label for="exampleInputEmail1">Email address</label> */}
                        <input
                            type="email"
                            className="form-control"
                            id="Email1"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"/>
                    </div>

                    <div class="form-group">
                        {/* <label for="exampleInputPassword1">Password</label> */}
                        <input
                            type="password"
                            className="form-control"
                            id="Password1"
                            placeholder="Password"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>

            </div>
        )
    }
}
export default Login;