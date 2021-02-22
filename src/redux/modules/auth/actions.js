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

const failAuthorize = (error) => {
    return { type: types.AUTHORIZE_FAILED, payload: { error } };
};

export { login, logout, authorize, failAuthorize };
