import { call, put, takeLatest } from 'redux-saga/effects';
import API from '../../services/API';
import { setAddressList, GET_ADDRESS_LIST } from '../modules/addressList';

function* fetchAddressList() {
    try {
        const addresses = yield call(API.getAddressList);
        yield put(setAddressList(addresses));
    } catch (error) {
        console.log(error);
    }
}

function* addressListSaga() {
    yield takeLatest(GET_ADDRESS_LIST, fetchAddressList);
}

export default addressListSaga;
