import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Avatar from 'material-ui/Avatar';
import classNames from 'classnames';
import List, {ListItem, ListItemText} from 'material-ui/List';
import Divider from 'material-ui/Divider';


import {Link, Route} from 'react-router-dom';
import AccountComponent from './account';
import EditPhotoComponent from './editPhoto';
import OrdersComponent from './orders';
import ReviewsComponent from './reviews';


const styless = {
    row: {
        display: 'flex',
        justifyContent: 'center'
    },

    bigAvatar: {
        margin: "20px auto",
        marginBottom: "5px",
        width: '160px',
        height: '160px'
    },
    name: {
        color: "#000",
        textAlign:"center",
    },
    links:{
        // margin:'10px',
        // padding:'15px',
    }
}

class LinksAndImage extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div >
                <div style={styless.row} className="imageAndName">
                    <Avatar
                        alt="Adelle Charles"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3w9o7iVYAkOGERSRcJcuF-vGlL25n2R0gLDXbdtLsvmRJLWrRkg"
                        style={styless.bigAvatar}/>
                </div>
                <h4 style={styless.name}>User</h4>

                <div className="links">
                    <List>
                        <ListItem>
                            <ListItemText primary={<Link style={styless.links} to="/dashboard/profile">Profile</Link>} />
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <ListItemText primary={<Link style={styless.links} to="/dashboard/account">Account</Link>} />
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <ListItemText primary={<Link style={styless.links} to="/dashboard/edit">Photo</Link>} />
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <ListItemText primary={<Link style={styless.links} to="/dashboard/orders">Orders</Link>} />
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <ListItemText primary={<Link style={styless.links} to="/dashboard/reviews">Reviews</Link>} />
                        </ListItem>
                    </List>
                </div>
            </div>
        )
    }
}

const styles = theme => ({
    root: {
        flexGrow: 1,
        width: '90%',
        margin: '0px auto',
        marginTop: '30px'
    },
    paper: {
        padding: 16,
        marginTop: '5px',
        textAlign: 'left',
        color: theme.palette.text.secondary
    }
});

class UserDsahboard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={10}>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                        <Paper className={classes.paper}>

                            <LinksAndImage/>

                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={9} xl={9}>
                        <Paper className={classes.paper}>
                            <Route path={`${this.props.match.url}/account`} component={AccountComponent} />
                            <Route path={`${this.props.match.url}/edit`} component={EditPhotoComponent} />
                            <Route path={`${this.props.match.url}/orders`} component={OrdersComponent} />
                            <Route path={`${this.props.match.url}/reviews`} component={ReviewsComponent} />
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

UserDsahboard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserDsahboard);
