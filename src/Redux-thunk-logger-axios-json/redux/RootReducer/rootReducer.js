import { combineReducers } from "redux";
import contactReducer from "../component/contacts/ContactReducer";

import usersReducer from "../users/userReducer";

const rootReducer = combineReducers({
    data: usersReducer,
    contactData: contactReducer,
  });
  
  export default rootReducer;