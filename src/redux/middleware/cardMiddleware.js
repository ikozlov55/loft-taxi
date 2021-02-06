import API from '../../services/API';
import { GET_CARD, ADD_CARD, saveCard, getCard } from '../modules/card';
import { selectToken } from '../modules/selectors';

const getCardMiddleware = ({ dispatch, getState }) => (next) => (action) => {
    if (action.type === GET_CARD) {
        const token = selectToken(getState());

        API.getCard(token).then(({ cardNumber, expiryDate, cardName, cvc }) => {
            dispatch(saveCard(cardNumber, expiryDate, cardName, cvc));
        });
    } else if (action.type === ADD_CARD) {
        const token = selectToken(getState());
        const { cardNumber, expiryDate, cardName, cvc } = action.payload;

        API.addCard(cardNumber, expiryDate, cardName, cvc, token).then(() =>
            dispatch(getCard())
        );
    } else {
        next(action);
    }
};

export default getCardMiddleware;
