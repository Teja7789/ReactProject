import {
  CREATE_COMPANY_FAILURE,
  CREATE_COMPANY_REQUEST,
  CREATE_COMPANY_SUCCESS,
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./action";

const intialState = {
  loading: false,
  usersGetAll: [],
  selectedCompany:{},
};

const userReducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_USERS_SUCCESS:
      return { ...state, loading: false, usersGetAll: action.payload.data };
    case FETCH_USERS_FAILURE:
      return { ...state, loading: false, error: action.payload };
      case CREATE_COMPANY_REQUEST:
        return { ...state, loading: true,selectedCompany: action.payload, error: null };
      case CREATE_COMPANY_SUCCESS:
        return { ...state, loading: false, selectedCompany: action.payload };
    case CREATE_COMPANY_FAILURE:
        return { ...state, loading: false, error: action };
      default:
      return state;
  }
};
export default userReducer;
