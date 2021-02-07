import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './modules/reducer';
import authorizeMiddleware from './middleware/authMiddleware';
import getCardMiddleware from './middleware/cardMiddleware';
import localStorageMiddleware from './middleware/localStorageMiddleware';
import localStorageService from '../services/localStorageService';
import addressListSaga from './sagas/addressListSaga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
    sagaMiddleware,
    authorizeMiddleware,
    getCardMiddleware,
    localStorageMiddleware,
];

const preloadedState = localStorageService.getState() || undefined;

const store = createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleware.run(addressListSaga);

export default store;
