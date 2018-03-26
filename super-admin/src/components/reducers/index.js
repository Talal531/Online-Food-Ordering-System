import { combineReducers } from 'redux';
import restaurantReducer from '../reducers/restaurantReducer';
import userReducer from '../reducers/usersReducer';

const rootReducer =     combineReducers({
      restaurants: restaurantReducer,
      users: userReducer,
    });

export default rootReducer;
