import { call, put, takeLatest } from 'redux-saga/effects';
import API from '../../../services/API';
import * as actions from './actions';
import * as types from './types';
import history from '../../../history';

const register = actions.register;
const completeRegistration = actions.completeRegistration;
const failRegistration = actions.failRegistration;

function* registration(action) {
    try {
        const { email, name, password } = action.payload;
        yield call(API.register, email, name, password);
        yield put(actions.completeRegistration());
    } catch (error) {
        yield put(actions.failRegistration(error));
    }
}

function* redirectToLoginPage() {
    yield call(history.push, '/login');
}

function* registrationSaga() {
    yield takeLatest(types.REGISTRATION, registration);
    yield takeLatest(types.REGISTRATION_COMPLETED, redirectToLoginPage);
}

export { register, completeRegistration, failRegistration, registrationSaga };
