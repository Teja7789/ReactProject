import { call, put, takeLatest } from "redux-saga/effects";
import {
  CREATE_COMPANY_REQUEST,
  FETCH_USERS_REQUEST,
  createCompanyFailure,
  createCompanySuccess,
  fetchUsersFailure,
  fetchUsersSuccess,
} from "./action";
import axios from "axios";

function* fetchUsers() {
  try {
    const respApi = yield call(axios.get, "http://localhost:3006/contacts");
    yield put(fetchUsersSuccess(respApi));
    yield put(console.log(respApi, "respApi"));
  } catch (error) {
    yield put(fetchUsersFailure(error));
  }
}

function* createCompany(action) {
  try {
    const  formData  = action.payload;
    const response = yield call(
      axios.post,
      "http://localhost:3006/contacts",
      formData
    );
    // if (response.status === 200) {
      yield put(createCompanySuccess(response));
    // }
  } catch (error) {
    yield put(createCompanyFailure(error));
  }
}

function* usersSaga() {
  yield takeLatest(FETCH_USERS_REQUEST, fetchUsers);
  yield takeLatest(CREATE_COMPANY_REQUEST, createCompany);
}
export default usersSaga;
