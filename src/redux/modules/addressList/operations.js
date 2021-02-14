import { call, put, takeLatest } from 'redux-saga/effects';
import API from '../../../services/API';
import * as actions from './actions';
import * as types from './types';

const getAddressList = actions.getAddressList;

const setAddressList = actions.setAddressList;

function* fetchAddressList() {
    try {
        const addresses = yield call(API.getAddressList);
        yield put(actions.setAddressList(addresses));
    } catch (error) {
        console.log(error);
    }
}

function* addressListSaga() {
    yield takeLatest(types.GET_ADDRESS_LIST, fetchAddressList);
}

export { getAddressList, setAddressList, addressListSaga };
