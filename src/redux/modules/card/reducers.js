import * as types from './types';

const initialState = {
    isAdded: false,
    data: {
        cardNumber: null,
        expiryDate: null,
        cardName: null,
        cvc: null,
    },
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.SAVE_CARD:
            return { ...state, isAdded: true, data: action.payload };
        case types.DELETE_CARD:
            return initialState;
        default:
            return state;
    }
}
