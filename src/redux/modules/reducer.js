import { combineReducers } from 'redux';
import authReducer from './auth';
import cardReducer from './card';
import addressListReducer from './addressList';
import routeReducer from './route';

const reducer = combineReducers({
    auth: authReducer,
    card: cardReducer,
    addressList: addressListReducer,
    route: routeReducer,
});

export default reducer;
