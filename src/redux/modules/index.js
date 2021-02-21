import { spawn } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import { default as authReducer, authOperations } from './auth';
import {
    default as addressListReducer,
    addressListOperations,
} from './addressList';
import { default as cardReducer, cardOperations } from './card';
import { default as routeReducer, routeOperations } from './route';
import {
    default as registraionReducer,
    registraionOperations,
} from './registration';
import { default as orderReducer } from './order';

export function* rootSaga() {
    yield spawn(authOperations.authorizationSaga);
    yield spawn(addressListOperations.addressListSaga);
    yield spawn(cardOperations.paymentSaga);
    yield spawn(routeOperations.routeSaga);
    yield spawn(registraionOperations.registrationSaga);
}

const reducer = combineReducers({
    auth: authReducer,
    card: cardReducer,
    addressList: addressListReducer,
    route: routeReducer,
    registraion: registraionReducer,
    order: orderReducer,
});

export default reducer;
