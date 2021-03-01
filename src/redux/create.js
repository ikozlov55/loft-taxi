import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import localStorageMiddleware from './middleware/localStorageMiddleware';
import localStorageService from '../services/localStorageService';
import reducer, { rootSaga } from './modules';

export default function configureStore(initialState = null) {
    const sagaMiddleware = createSagaMiddleware();

    const middlewares = [sagaMiddleware, localStorageMiddleware];

    const preloadedState =
        initialState || localStorageService.getState() || undefined;

    const store = createStore(
        reducer,
        preloadedState,
        composeWithDevTools(applyMiddleware(...middlewares))
    );

    sagaMiddleware.run(rootSaga);

    return store;
}
