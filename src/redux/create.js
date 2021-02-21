import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import localStorageMiddleware from './middleware/localStorageMiddleware';
import localStorageService from '../services/localStorageService';
import reducer, { rootSaga } from './modules';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, localStorageMiddleware];

const preloadedState = localStorageService.getState() || undefined;

const store = createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);

export default store;
