// import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./Components/index";
import { createStore } from "redux";
// import logger from "redux-logger";
const store = createStore(rootReducer,
    // composeWithDevTools(
        // applyMiddleware(logger)
        )
        // );
export default store;