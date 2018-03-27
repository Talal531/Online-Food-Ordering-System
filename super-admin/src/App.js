import React, { Component } from 'react';
import {  BrowserRouter as Router, Route} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import SideBar from './components/sidebar/sidebar';
import HeaderBar from './components/header';
import Admins from './components/admins';
import Restaurants from './components/restaurants/restaurants';
import RestaurantDetails from './components/restaurants/restaurantDetails';
import Dashboard from './components/dashboard';
import Orders from './components/orders';
import Users from './components/users/users';
import Settings from './components/settings.js';

import  { Grid } from 'semantic-ui-react';

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Router>
      <div className="App">
      <HeaderBar />
        <Grid stackable>
          <Grid.Row stretched>
            <Grid.Column width={3} computer={3} /*mobile={16}*/ largeScreen={3}  style={{paddingTop: '0px'}}>
              <SideBar />
            </Grid.Column>

            <Grid.Column width={13} >
                <div>
                  <Route exact path = "/dashboard" component = {Dashboard} />
                  <Route path = "/admins" component = {Admins} />
                  <Route exact path = "/restaurants" component = {Restaurants} />
                  <Route path = "restaurants/details" component = {RestaurantDetails} />
                  <Route path = "/orders" component = {Orders} />
                  <Route path = "/users" component = {Users} />
                  <Route path = "/settings" component = {Settings} />
                </div>
            </Grid.Column>
          </Grid.Row>
         </Grid>
      </div>
      </Router>

    );
  }
}

export default App;
