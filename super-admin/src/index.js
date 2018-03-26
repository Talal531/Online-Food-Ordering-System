import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import configureStore from './components/store/configureStore'
import { addRestaurant, removeRestaurant } from './components/actions/restaurantsAction';
import { addUser } from './components/actions/usersAction'

const store = configureStore();
store.subscribe(() => {
  console.log(store.getState());
})

const rest1 = store.dispatch(addRestaurant( {
  restaurantName: 'Restaurant 1',
  restaurantAddress: '123 street',
  restaurantNumber: '1234456780',
  managerName: 'ABC',
  // ownerName: 'XYZ',
  countary: 'Pakistan',
  city: 'Karachi',
  status: undefined,
  action: undefined,
 } ))
const rest2 = store.dispatch(addRestaurant( {
  restaurantName: 'Restaurant 2',
  restaurantAddress: '123 street',
  restaurantNumber: '1234456780',
  managerName: 'ABC',
  ownerName: 'XYZ',
  countary: 'Pakistan',
  city: 'Karachi',
  status: undefined,
  action: undefined,
 } ))

 const rest3 = store.dispatch(addRestaurant( {
  restaurantName: 'Restaurant 3',
  restaurantAddress: '123 street',
  restaurantNumber: '1234456780',
  managerName: 'ABC',
  ownerName: 'XYZ',
  countary: 'Pakistan',
  city: 'Karachi',
  status: undefined,
  action: undefined,
 } ))
//
// setTimeout(() => {
//   store.dispatch(removeRestaurant({ id: rest1.restaurant.id }))
// }, 3000)

const user1 = store.dispatch(addUser({ userName: 'Talal', emailId: 'abc@gmail.com', phone: 1234567890 }))
console.log(user1)
const user2 = store.dispatch(addUser({ userName: 'Malick', emailId: 'abc@gmail.com' }))
const user3 = store.dispatch(addUser({ userName: 'Malick', emailId: 'abc@gmail.com', phone: 1234567890 }))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById('root'));
registerServiceWorker();
