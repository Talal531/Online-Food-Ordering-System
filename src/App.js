import React, {Component} from 'react';
// ===================================================================
// REACT-ROUTER
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
// =================================================================== 
//CUSTOM  COMPONENTS
import Header from './components/header';
import Home from './components/home';
import Restaurants from './components/restaurants';
import Login from './components/loginButton';
import UserDashboard from './components/userDashboard';
import RestaurantsMenu from './components/restaurantsMenu';
import OrderMenu from './components/orderMenu'
// =====================================================================
// MATERIAL-UI COMPONENTS
// ======================================================================
const DB_URL = "http://localhost:3001/home";

// ========================== HOME COMPONENT START=======================
class App extends Component {
  state={
    slider: [],
    city: [],
    restaurants: [],
  }
  componentDidMount() {
          fetch(DB_URL, {method: 'GET'})
              .then(response => response.json())
              .then(json => {
                //  console.log(json.restaurants)
                 this.setState({restaurants: json.restaurants})
  
              })
  
      }
  render() {
    return(
      <BrowserRouter>
        <div>
          <Header/>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/:resCity/restaurants" component={Restaurants}/>
          <Route exact={true} path="/:resCity/restaurants/:resName" component={RestaurantsMenu} />
          <Route path="/:resCity/restaurants/:resName/orders" render={(props)=>(
            <OrderMenu {...props} restaurantss={this.state.restaurants} />
          )} />

          {/* </Route> */}
         
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={UserDashboard} />

        </div>
      </BrowserRouter>
    );
  }
}
// =========================HOME COMPONENT END=============================
export default App;