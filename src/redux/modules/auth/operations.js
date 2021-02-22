import { call, put, takeLatest } from 'redux-saga/effects';
import API from '../../../services/API';
import * as actions from './actions';
import * as types from './types';

const login = actions.login;

const logout = actions.logout;

const authorize = actions.authorize;

const failAuthorize = actions.failAuthorize;

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

export { login, logout, authorize, failAuthorize, authorizationSaga, auth };
