export const GET_CARD = 'loft-taxi/card/GET_CARD';
export const ADD_CARD = 'loft-taxi/card/ADD_CARD';
export const SAVE_CARD = 'loft-taxi/card/SAVE_CARD';
export const DELETE_CARD = 'loft-taxi/card/DELETE_CARD';

const initialState = {
    isCardAdded: false,
    data: {
        cardNumber: null,
        expiryDate: null,
        cardName: null,
        cvc: null,
    },
};

export function getCard() {
    return { type: GET_CARD };
}

export function addCard(cardNumber, expiryDate, cardName, cvc) {
    return {
        type: ADD_CARD,
        payload: { cardNumber, expiryDate, cardName, cvc },
    };
}

export function saveCard(cardNumber, expiryDate, cardName, cvc) {
    return {
        type: SAVE_CARD,
        payload: { cardNumber, expiryDate, cardName, cvc },
    };
}

export function deleteCard() {
    return { type: DELETE_CARD };
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_CARD:
            return { ...state, isCardAdded: true, data: action.payload };
        case DELETE_CARD:
            return initialState;
        default:
            return state;
    }
}
