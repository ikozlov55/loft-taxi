import { call, put, takeLatest } from 'redux-saga/effects';
import API from '../../../services/API';
import * as actions from './actions';
import * as types from './types';

const getRoute = actions.getRoute;

const setRoute = actions.setRoute;

const clearRoute = actions.deleteRoute;

function* fetchRoute(action) {
    try {
        const { from, to } = action.payload;
        const coordinates = yield call(API.getRoute, from, to);
        yield put(setRoute(coordinates));
    } catch (error) {
        console.log(error);
    }
}

function* routeSaga() {
    yield takeLatest(types.GET_ROUTE, fetchRoute);
}

export { getRoute, setRoute, clearRoute, routeSaga, fetchRoute };
