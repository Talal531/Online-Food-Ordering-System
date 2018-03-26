

const userReducerDefaultState = []

const userReducer = (state = userReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return [
                ...state,
                action.user,
            ];

          case 'REMOVE_USER':
          const decisionMsg = window.confirm("Do you want to delete this user.. ?");
          if(decisionMsg) {
            return state.filter(({ id }) =>  id !== action.id )
          }
          break;
        default:
            return state;

    }
}

export default userReducer;
