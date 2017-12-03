import React, {Component} from 'react';
import Button from 'material-ui/Button';
import {Modal} from 'react-materialize'

import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import {FormControl, InputLabel, Input, InputAdornment, IconButton} from 'material-ui';
import {Visibility, VisibilityOff} from 'material-ui-icons';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    formControl: {
        margin: theme.spacing.unit
    },
    withoutLabel: {
        marginTop: theme.spacing.unit * 3
    }
});



class LoginButton extends Component {

        state = {
            password: '',
            showPassword: false,
            email: '',
        };

        handleChange = prop => event => {
            this.setState({ [prop]: event.target.value });
        };

        handleMouseDownPassword = event => {
            event.preventDefault();
         };

        handleClickShowPasssword = () => {
        this.setState({ showPassword: !this.state.showPassword });
        };

        render(){
             const { classes } = this.props;
            return (
                <div>
            
                <Modal
                    header='Login to FoodMasty'
                    fixedFooter
                    trigger={<Button color = "contrast" > Login </Button>}>


                        <FormControl className={classes.formControl} s={12} m={12} l={6}>
                        <InputLabel htmlFor="email">Email</InputLabel>

                        <Input
                            id="email"
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange('email')}
                            endAdornment={
                                <InputAdornment position="start">
                                    <IconButton>email</IconButton>
                                </InputAdornment>}
                        />
                    </FormControl>

                    <FormControl className={classes.formControl}  s={12} m={12} l={6} >
                        <InputLabel htmlFor="password">Password</InputLabel>

                        <Input
                            id="password"
                            type={this.state.showPassword ? 'text' : 'password'}
                            value={this.state.password}
                            onChange={this.handleChange('password')}

                            endAdornment={
                                <InputAdornment position="end">

                        <IconButton
                            onClick={this.handleClickShowPasssword}
                            onMouseDown={this.handleMouseDownPassword}
                        >

                            {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                            
                        </IconButton>
                                </InputAdornment>}
                        />
                    </FormControl>


                 

                </Modal>
            </div>
        )
    }

}
export default withStyles(styles)(LoginButton);