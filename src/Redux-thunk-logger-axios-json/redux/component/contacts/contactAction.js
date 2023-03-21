import {
    FETCH_CONTACTS_REQUEST,
    FETCH_CONTACTS_SUCCESS,
    FETCH_CONTACTS_ERROR,
  } from "./Types";
  
  const fetchContactsRequest = () => {
    return {
      type: FETCH_CONTACTS_REQUEST,
    };
  };
  
  const fetchContactsSuccess = (contacts) => {
    return {
      type: FETCH_CONTACTS_SUCCESS,
      payload: contacts,
    };
  };
  
  const fetchContactsError = (error) => {
    return {
      type: FETCH_CONTACTS_ERROR,
      payload: error,
    };
  };
  
  export { fetchContactsRequest, fetchContactsSuccess, fetchContactsError };