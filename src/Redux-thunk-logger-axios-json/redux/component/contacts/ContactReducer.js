import {
    FETCH_CONTACTS_REQUEST,
    FETCH_CONTACTS_SUCCESS,
    FETCH_CONTACTS_ERROR,
  } from "./Types";
  const initialState = {
    loading: false,
    contacts: [],
    error: "",
  };
  
  const contactReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_CONTACTS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_CONTACTS_SUCCESS:
        return {
          loading: false,
          contacts: action.payload,
          error: "",
        };
      case FETCH_CONTACTS_ERROR:
        return {
          loading: false,
          contacts: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default contactReducer;