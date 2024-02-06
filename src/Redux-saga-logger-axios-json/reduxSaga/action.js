export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = (usersData) => ({
  type: FETCH_USERS_SUCCESS,
  payload: usersData,
});

export const fetchUsersFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});

//POST_USER

export const CREATE_COMPANY_REQUEST = 'CREATE_COMPANY_REQUEST'
export const CREATE_COMPANY_SUCCESS = 'CREATE_COMPANY_SUCCESS'
export const CREATE_COMPANY_FAILURE = 'CREATE_COMPANY_FAILURE'

export const createCompanyRequest = (formData) => ({
  type: CREATE_COMPANY_REQUEST,
  payload: formData
});

export const createCompanySuccess = (formData) => ({
  type: CREATE_COMPANY_SUCCESS,
  payload: formData
})

export const createCompanyFailure = (error) => ({
  type: CREATE_COMPANY_FAILURE,
  payload: error
})
