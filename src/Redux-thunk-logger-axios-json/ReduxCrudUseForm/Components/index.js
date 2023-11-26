import { combineReducers } from "redux";
import contactReducer from "../contactReducer";
// import { contactReducer } from "../contactReducer";

export default combineReducers({
    conntact:contactReducer
})