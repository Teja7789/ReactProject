import { CREATE_CONTACT } from "./Types";


const intialState = {
 contacts :[]
};

const contactReducer = (state = intialState,action) =>{
    switch(action.type) {
      case CREATE_CONTACT:
        return {
            ...state,
            contacts:action.payload, 
        };
        default:
            return state;
    }
}
export default contactReducer;