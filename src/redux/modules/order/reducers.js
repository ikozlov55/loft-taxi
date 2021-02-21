import * as types from './types';

const initialState = {
    isSent: false,
    data: {
        from: null,
        to: null,
        tariffId: null,
    },
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.SEND_ORDER:
            return { ...state, isSent: true, data: action.payload };
        case types.DELETE_ORDER:
            return initialState;
        default:
            return state;
    }
}
