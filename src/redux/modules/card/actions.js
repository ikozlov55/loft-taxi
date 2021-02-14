import * as types from './types';

const getCard = () => {
    return { type: types.GET_CARD };
};

const addCard = (cardNumber, expiryDate, cardName, cvc) => {
    return {
        type: types.ADD_CARD,
        payload: { cardNumber, expiryDate, cardName, cvc },
    };
};

const saveCard = (cardNumber, expiryDate, cardName, cvc) => {
    return {
        type: types.SAVE_CARD,
        payload: { cardNumber, expiryDate, cardName, cvc },
    };
};

const deleteCard = () => {
    return { type: types.DELETE_CARD };
};

export { getCard, addCard, saveCard, deleteCard };
