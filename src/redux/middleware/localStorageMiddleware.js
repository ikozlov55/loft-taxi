import { LOGIN, LOGOUT } from '../modules/auth';
import { SAVE_CARD, DELETE_CARD } from '../modules/card';
import localStorageService from '../../services/localStorageService';

const mutatingActions = [LOGIN, LOGOUT, SAVE_CARD, DELETE_CARD];

const localStorageMiddleware = ({ _, getState }) => (next) => (action) => {
    if (mutatingActions.includes(action.type)) {
        let result = next(action);
        localStorageService.saveState(getState());
        return result;
    } else {
        next(action);
    }
};

export default localStorageMiddleware;
