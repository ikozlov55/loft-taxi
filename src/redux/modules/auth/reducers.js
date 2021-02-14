import * as types from './types';

const initialState = {
    isLoggedIn: false,
    token: null,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN:
            return { ...state, isLoggedIn: true, token: action.payload.token };
        case types.LOGOUT:
            return initialState;
        default:
            return state;
    }
}
