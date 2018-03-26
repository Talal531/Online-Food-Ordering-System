import React from 'react';
// ===================================================================
// REACT-ROUTER
import { BrowserRouter as Router , Route} from 'react-router-dom';
// ===================================================================
//CUSTOM  COMPONENTS
import Dashboard from '../components/dashboard';
import Admins from '../components/admins';
import Restaurants from '../components/restaurants';
// ===================================================================
const Routing = () => {
  return (
    <Router>
    <div>
      <Route exact path="/" component={Dashboard} />
      <Route path="/admins" component={Admins} />
      <Route path="/restaurants" component={Restaurants} />
      </div>
    </Router>
  )
}
export default Routing;
