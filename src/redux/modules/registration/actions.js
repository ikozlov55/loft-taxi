import * as types from './types';

const register = (email, name, password) => {
    return { type: types.REGISTRATION, payload: { email, name, password } };
};

const completeRegistration = () => {
    return { type: types.REGISTRATION_COMPLETED };
};

const failRegistration = (error) => {
    return { type: types.REGISTRATION_FAILED, payload: { error } };
};

export { register, completeRegistration, failRegistration };
