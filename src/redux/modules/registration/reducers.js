import * as types from './types';

const initialState = {
    error: null,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.REGISTRATION_FAILED:
            return { ...state, error: action.payload.error };
        case types.REGISTRATION:
        case types.REGISTRATION_COMPLETED:
            return initialState;
        default:
            return state;
    }
}
