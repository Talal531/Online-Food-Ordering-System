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
// ================================================
import adminDashboard from './admin/dashboard';
// =====================================================================
// MATERIAL-UI COMPONENTS
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';
// ======================================================================
const DB_URL = "http://localhost:3001/home";

// ========================== HOME COMPONENT START=======================

const theme = createMuiTheme({
  palette: {
    primary: purple, // Purple and green play nicely together.
    secondary: {
      ...green,
      A400: '#00e677'
    },
    error: red
  }
});

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
      <MuiThemeProvider theme={theme}>
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

          <Route exact path="/admin/dashboard" component={adminDashboard} />

        </div>
      </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}
// =========================HOME COMPONENT END=============================
export default App;