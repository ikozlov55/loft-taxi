import * as types from './types';

const initialState = {
    isLoggedIn: false,
    token: null,
    error: null,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN:
            return {
                ...state,
                isLoggedIn: true,
                token: action.payload.token,
                error: null,
            };
        case types.LOGOUT:
            return initialState;
        case types.AUTHORIZE_FAILED:
            return { ...state, error: action.payload.error };
        default:
            return state;
    }
}
