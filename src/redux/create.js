import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './modules/reducer';
import authorizeMiddleware from './middleware/authMiddleware';
import getCardMiddleware from './middleware/cardMiddleware';
import localStorageMiddleware from './middleware/localStorageMiddleware';
import localStorageService from '../services/localStorageService';

const middlewares = [
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

export default store;
