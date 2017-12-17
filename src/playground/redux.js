import {createStore} from 'redux';

//Action generators = functions that return action objects

// const incrementCount = (payload = {}) => ({ //set the default argument to empty object
//     type: 'INCREMENT',
//     incrementBy: typeof action.incrementBy === 'number' ? action.incrementBy : 1;
    
// })

const incrementCount = ({incrementBy = 1} = {}) => ({ //set the default argument to empty object
    type: 'INCREMENT',
    incrementBy
    
})

const decrementCount = ({decrementBy = 1} = {}) => ({ //set the default argument to empty object
    type: 'DECREMENT',
    decrementBy
    
})

const reset = () => ({
    type: 'RESET'
})

const setCount = ({count} = {}) => ({
    type: 'SET',
    count
})

//Reducers:
// 1. Reducers are pure function
// 2. Never change state or function

const countReducer = ((state = { 
    count: 0
}, action) => {

    switch (action.type) {
        case "INCREMENT":
            return {
                count: state + action.incrementBy
            };
        case "DECREMENT":
            return {
                count: state - action.decrementBy
            };
        case "SET":
            return {count: action.count};
        case "RESET":
            return {count: 0};
        default:
            return state;
    }
})

//create store with the two arguments (state and action) inside the call back function .. e.g (this.state={counter:0,})
const store = createStore(countReducer); 



const unsubscribe = store.subscribe(() => { //subscribe function gets callback function and this function calls whenever store changes
    console.log(store.getState()); //getState return the current state

}) 
//whenever unsubscribe call the function stop to see changes(i.e stop notify)

// ===============================================
// Actions :It is an object that gets sent to the store and allow us to change
// the redux store (like change state) actions like increment, decrement, reset
// counter

// store.dispatch({ //dispacth method,allow us to sent the action to the store or dispatch the action to the store
//     type: 'INCREMENT',
//     incrementBy: 5
// })

store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(incrementCount());


// store.dispatch({ 
//     type: 'DECREMENT',
//     decrementBy: 10
// })

store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy: 10}))

// store.dispatch({ 
//     type: 'RESET'
// })

store.dispatch(resetCount());

// store.dispatch({ 
//     type: 'SET',
//     count: 101,
// })

store.dispatch(setCount( {count: 101} ))
 console.log(store. getState());