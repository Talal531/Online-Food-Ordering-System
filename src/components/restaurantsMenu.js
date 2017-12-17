import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import RestaurantInfoTab from './restaurantInfoTab';

const REQ_URL = "http://localhost:3001/home";
const styles = theme =>( {
    root:{
        // minWidth:'99%',
        width:'85%',
        margin:'20px auto',
    },
    card: {
        minWidth:'100%',
        width: '100%',
    },
    media: {
        height: 350
    },
    buttonDIV:{
        padding:16,
        fontSize:'110%',
    },
    button:{
        fontSize:'100%',
        
    },
    sidecard: {
    maxWidth: 200,
    height: 200,
  },
    sidemedia: {
    height: 200,
  },
});
class RestaurantsMenu extends Component {
     constructor(props) {
        super(props);

        this.state = {
            restaurants: []
        }
    }
    componentDidMount() {
        fetch(REQ_URL, {method: 'GET'})
            .then(response => response.json())
            .then(json => {
                const restaurants = json.restaurants
                this.setState({restaurants})

            })

    }
    renderList = (restaurantList) => {
        const {classes} = this.props;
        // {console.log(restaurantList.filter(restau =>restau.restaurant_name===this.props.match.params.resName))}
        const filterRest = restaurantList.filter(restau =>restau.restaurant_name===this.props.match.params.resName);
        return filterRest.map((item,index)=>{
            return (
                <Card key={index} className={classes.card}>
                    <CardMedia 
                        className={classes.media}
                        image={item.restaurant_image}
                        title={item.restaurant_name}
                     />

                    <CardContent>
                        <Typography style={{textTransform: 'Capitalize', fontWeight: 'bold'}} type="headline" component="h2">
                            {item.restaurant_name.replace(/-/g, ' ')}
                        </Typography>
                    </CardContent>

                    <CardActions className={classes.buttonDIV}>
                        <Link to={`${this.props.match.url}/orders`}>
                        <Button raised color="primary" className={classes.button}>
                            Online Orders
                        </Button>
                        </Link>
                    </CardActions>
                </Card>
            )
        })
    }
    render() {
        const {classes} = this.props;
        // console.log(this.props);
        // console.log(this.state.restaurants.filter(restau =>restau.restaurant_name===this.props.match.params.resName));
        return (
            <div className={classes.root}>
            {/* {console.log(this.state.restaurants)} */}

            <Grid container spacing={24}>
                <Grid item xs={12} md={8}>
                {this.renderList(this.state.restaurants)}
                 <RestaurantInfoTab abc={this.state.restaurants.filter(restau =>restau.restaurant_name===this.props.match.params.resName)}/>
                </Grid>

                <Grid item md={4}>
                    <Paper>
                        <span>Suggested Resturants</span>
                        <Card className={classes.sidecard}>
                            <CardMedia
                                className={classes.sidemedia}
                                image=""
                                title=""
                             />
                            <CardContent>
                                <Typography>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, eveniet!</p>
                                </Typography>
                            </CardContent>
                        </Card>


                    </Paper>
                </Grid>
            </Grid>

            {/* //////////////////////////////////////////////////////////// */}

      {/* <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="http://c.amsterdam/wp-content/uploads/2015/09/restaurant-c-michiel-van-der-eerde-amsterdam-2.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography className={classes.typography} type="headline" component="h2">
           {this.props.match.params.resName}
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>

        <CardActions className={classes.buttonDIV}>
        <Link to={`${this.props.match.url}/orders`}>
          <Button raised color="primary" className={classes.button}>
            Online Orders
          </Button>
        </Link>
        </CardActions>
        
      </Card> */}

      {/* Tab Component */}
            </div>
        )
    }
}
RestaurantsMenu.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RestaurantsMenu);
// export default RestaurantsMenu;