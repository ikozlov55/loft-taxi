import * as types from './types';

const login = (token) => {
    return { type: types.LOGIN, payload: { token } };
};

const logout = () => {
    return { type: types.LOGOUT };
};

const authorize = (email, password) => {
    return { type: types.AUTHORIZE, payload: { email, password } };
};

export { login, logout, authorize };
