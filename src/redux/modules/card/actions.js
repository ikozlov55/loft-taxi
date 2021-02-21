import * as types from './types';

const getCard = () => {
    return { type: types.GET_CARD };
};

const addCard = (cardData) => {
    return {
        type: types.ADD_CARD,
        payload: cardData,
    };
};

const saveCard = (cardData) => {
    return {
        type: types.SAVE_CARD,
        payload: cardData,
    };
};

const deleteCard = () => {
    return { type: types.DELETE_CARD };
};

export { getCard, addCard, saveCard, deleteCard };
