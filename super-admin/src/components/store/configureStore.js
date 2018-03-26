import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import compose from 'compose';
import rootReducer from '../reducers/index';

const initialState = {};
const middleware = [thunk];

export default () => {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
    return store;
}
