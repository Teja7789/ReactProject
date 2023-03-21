import * as types from "../ActionTypes/actionTypes";
const initialState = {
    users:[],
    user:{},
    loading: false
}

const usersReducers = (state = initialState, action) => {
    switch (action.type){
        case types.GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false,
            };
            // //deleteuser-3 -deleteReducerState
            case types.DELETE_USER:
                //Postuser-3 -postReducerState
                case types.ADD_USER:{
return {
    ...state,
    loading: false,
}
            }
        default:
            return state;
    }
};

export default usersReducers;