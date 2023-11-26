import { combineReducers } from "redux";
import usersReducers from "../Reducer/reducer";
import { contactReducer } from "../../../ReduxCrudUseForm/contactReducer";


const rootReducer = combineReducers({
    data:usersReducers,
})
export default rootReducer;


