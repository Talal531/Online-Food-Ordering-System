import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import RestaurantInfoTab from './restaurantInfoTab';

const REQ_URL = "http://localhost:3001/home";
const styles = {
    root:{
        minWidth:'99%',
        width:'99%',
        margin:'2px auto',
    },
    card: {
        minWidth:'100%',
        width: '100%',
    },
    media: {
        height: 350
    },
    typography:{
    fontSize:'2.5rem'
    },
    buttonDIV:{
        padding:16,
        fontSize:'110%',
    },
    button:{
        fontSize:'100%',
        
    }
};
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
    // renderList = (restaurantList) => {
    //     // {console.log(restaurantList.filter(restau =>restau.city==this.props.match.params.resCity))}
    //     //filter restaurants accoriding to CITY ==========================================================
    //     const filterList = restaurantList.filter(restau =>restau.cuisines) ;
    //     return restaurantList.map((item, index) => {
    //         return (    
    //             // console.log(item.cuisines)
    //             item.cuisines.map((obj,i)=>  <div> {obj.cuisineId}   </div>  )
                
   
    //         );
    //     })
    // }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
            {/* {this.renderList(this.state.restaurants)} */}
            {/* //////////////////////////////////////////////////////////// */}

      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="http://c.amsterdam/wp-content/uploads/2015/09/restaurant-c-michiel-van-der-eerde-amsterdam-2.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography className={classes.typography} type="headline" component="h2">
           Restaurant 1
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
      </Card>

      {/* Tab Component */}
      <RestaurantInfoTab />
            </div>
        )
    }
}
RestaurantsMenu.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RestaurantsMenu);
// export default RestaurantsMenu;