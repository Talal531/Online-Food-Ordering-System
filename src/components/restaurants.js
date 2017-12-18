import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {Row, Col, Grid, Thumbnail} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
// import Grid from 'material-ui/Grid';
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';


import Filters from './filters';

const DB_URL = "http://localhost:3001/home";

const _styles = {
    card: {
        width: '100%'
    },
    media: {
        height: 150
    }
}

const styles = theme => ({
    root: {
        flexGrow:1
    },
    button:{
        fontSize: '16px'
    },
})

class Restaurants extends Component {
    constructor(props) {
        super(props);

        this.state = {
            restaurants: []
        }
    }
    componentDidMount() {
        fetch(DB_URL, {method: 'GET'})
            .then(response => response.json())
            .then(json => {
                const restaurants = json.restaurants
                this.setState({restaurants})

            })

    }
    renderList = (restaurantList) => {
        const { classes } = this.props;
        // console.log(this.props)
        // {console.log(restaurantList.filter(restau =>restau.city==this.props.match.params.resCity))}
        //filter restaurants accoriding to CITY ==========================================================
        const filterList = restaurantList.filter(restau =>restau.city===this.props.match.params.resCity) ;
        return filterList.map((item, index) => {
            return (
                <div key={index}>
                    <Card style={_styles.card}>
                        <Link  to={`${this.props.match.url}/${item.restaurant_name}`}>

                            <CardMedia
                                style={_styles.media}
                                image={item.restaurant_image}
                                title={item.restaurant_name}/>

                        </Link>
                        <CardContent>
                            <h3 
                                style={{
                                textTransform: 'capitalize'
                                }}
                            >
                                {`${item.restaurant_name}`}
                            </h3>
                            <p>
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                                ranging across all continents except Antarctica
                            </p>
                        </CardContent>

                        <CardActions>
                        <Link to={`${this.props.match.url}/${item.restaurant_name}/orders`}>
                            <Button className={classes.button} color="primary">
                                Order Online
                            </Button>
                            </Link>
                        </CardActions>

                    </Card><br/>

                </div>

            );
        })
    }
    render() {
        const { classes } = this.props;
        return (
            <div
                style={{
                width: '95%',
                margin: '10px auto'
            }}>
                <h2>Best Restaurants in&nbsp;
                    <span
                        style={{
                        textTransform: 'capitalize',
                    }}>{this.props.match.params.resCity}</span>
                </h2>

                {/* <Grid container className={classes.root}>
                    <Grid item sm hidden={{ xlUp : true}}>
                        <Paper className={classes.paper}>
                            xs=12
                        </Paper>
                    </Grid>
                </Grid> */}
                

                <Row className="show-grid">
                    {/* 1st Column */}
                    <Col
                        style={{
                        boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
                        backgroundColor: '#fff'
                    }}
                        xsHidden
                        smHidden
                        md={3}>
                        <Filters cityName={this.props}/>
                    </Col>

                    {/* 2ndColumn */}

                    <Col xs={12} md={6}>
                        {this.renderList(this.state.restaurants)}
                    </Col>

                    {/* 3rd Column */}
                    <Col
                        style={{
                        border: '1px solid black'
                    }}
                        xsHidden
                        smHidden
                        md={3}>
                        <code>&lt;{'Col xsHidden md={3}'}
                            /&gt;</code>
                    </Col>
                </Row>
            </div>

        );
    }
}

Restaurants.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Restaurants);


