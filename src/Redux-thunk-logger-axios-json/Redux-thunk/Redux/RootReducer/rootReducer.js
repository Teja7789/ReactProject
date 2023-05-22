import { combineReducers } from "redux";
import usersReducers from "../Reducer/reducer";


const rootReducer = combineReducers({
    data:usersReducers
})
export default rootReducer;


