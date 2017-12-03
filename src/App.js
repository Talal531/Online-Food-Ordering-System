import React, {Component} from 'react';
// ===================================================================
// REACT-ROUTER
import {BrowserRouter, Route} from 'react-router-dom';
// =================================================================== CUSTOM
// COMPONENTS
import Header from './components/header';
import Home from './components/home';
import Restaurants from './components/restaurants';
// =====================================================================
// MATERIAL-UI COMPONENTS
// ======================================================================
const DB_URL = "http://localhost:3001/home";
// ========================== HOME COMPONENT START=======================
class App extends Component {
 
  render() {
    return(
      <BrowserRouter>
        <div>
          <Header/>
          <Route exact path="/" component={Home} />
          <Route path="/restaurants" component={Restaurants}/>
        </div>
      </BrowserRouter>
    );
  }
}
// =========================HOME COMPONENT END=============================
export default App;