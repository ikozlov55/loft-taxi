import { call, put, takeLatest, select } from 'redux-saga/effects';
import API from '../../../services/API';
import { authSelectors } from '../auth';
import * as actions from './actions';
import * as types from './types';

const getCard = actions.getCard;

const addCard = actions.addCard;

const saveCard = actions.saveCard;

const deleteCard = actions.deleteCard;

function* fetchCard() {
    try {
        const token = yield select(authSelectors.selectToken);
        const cardData = yield call(API.getCard, token);
        yield put(actions.saveCard(cardData));
    } catch (error) {
        console.log(error);
    }
}

function* postCard(action) {
    try {
        const token = yield select(authSelectors.selectToken);
        const { cardNumber, expiryDate, cardName, cvc } = action.payload;
        yield call(API.addCard, cardNumber, expiryDate, cardName, cvc, token);
        yield put(actions.getCard());
    } catch (error) {
        console.log(error);
    }
}

function* paymentSaga() {
    yield takeLatest(types.GET_CARD, fetchCard);
    yield takeLatest(types.ADD_CARD, postCard);
}

export { getCard, addCard, saveCard, deleteCard, paymentSaga };
