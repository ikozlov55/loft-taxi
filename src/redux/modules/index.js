import { spawn } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import { default as authReducer, authOperations, authTypes } from './auth';
import {
    default as addressListReducer,
    addressListOperations,
} from './addressList';
import { default as cardReducer, cardOperations } from './card';
import { default as routeReducer, routeOperations } from './route';
import {
    default as registrationReducer,
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

const appReducer = combineReducers({
    auth: authReducer,
    card: cardReducer,
    addressList: addressListReducer,
    route: routeReducer,
    registration: registrationReducer,
    order: orderReducer,
});

const reducer = (state, action) => {
    if (action.type === authTypes.LOGOUT) {
        state = undefined;
    }
    return appReducer(state, action);
};

export default reducer;
