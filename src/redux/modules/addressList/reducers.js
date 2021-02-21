import * as types from './types';

const initialState = {
    addresses: [],
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.SET_ADDRESS_LIST:
            return { ...state, addresses: action.payload.addresses };
        default:
            return state;
    }
}
