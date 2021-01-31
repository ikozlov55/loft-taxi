import { createStore } from 'redux';
import auth from './modules/auth';

const store = createStore(
    auth,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
