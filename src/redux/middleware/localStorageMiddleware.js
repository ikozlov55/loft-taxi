import { authTypes } from '../modules/auth';
import { cardTypes } from '../modules/card';
import localStorageService from '../../services/localStorageService';

const mutatingActions = [
    authTypes.LOGIN,
    cardTypes.SAVE_CARD,
    cardTypes.DELETE_CARD,
];

const localStorageMiddleware = ({ _, getState }) => (next) => (action) => {
    if (mutatingActions.includes(action.type)) {
        let result = next(action);
        localStorageService.saveState(getState());
        return result;
    } else if (action.type === authTypes.LOGOUT) {
        next(action);
        localStorageService.clear();
    } else {
        next(action);
    }
};

export default localStorageMiddleware;
