

const restaurantReducerDefaultState = [];

const restaurantReducer = (state = restaurantReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      return [
        ...state,
        action.restaurant,
      ];


    case 'REMOVE_RESTAURANT':
      let decisionMsg = window.confirm("Do you want to Delete this restaurant?");
      if(decisionMsg){
        return state.filter(( { id } ) =>  id !== action.id );
      }
      break;
    default:
    return state;

  }
}

export default restaurantReducer;
