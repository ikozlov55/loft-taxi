import * as types from './types';

const initialState = {
    coordinates: null,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.SET_ROUTE:
            return { ...state, coordinates: action.payload.coordinates };
        case types.DELETE_ROUTE:
            return initialState;
        default:
            return state;
    }
}
