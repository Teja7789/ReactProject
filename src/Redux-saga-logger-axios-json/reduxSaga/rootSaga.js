import { all } from 'redux-saga/effects';
import companiesSaga from './userSagas';

function* rootSaga() {
    yield all([
        companiesSaga(),
    ])
}
export default rootSaga;