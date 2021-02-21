import { call, put, takeLatest } from 'redux-saga/effects';
import API from '../../../services/API';
import * as actions from './actions';
import * as types from './types';

const logout = actions.logout;

const authorize = actions.authorize;

function* auth(action) {
    try {
        const { email, password } = action.payload;
        const token = yield call(API.auth, email, password);
        yield put(actions.login(token));
    } catch (error) {
        yield put(actions.failAuthorize(error));
    }
}

function* authorizationSaga() {
    yield takeLatest(types.AUTHORIZE, auth);
}

export { logout, authorize, authorizationSaga };
