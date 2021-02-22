import { takeLatest } from 'redux-saga/effects';
import { runSaga } from 'redux-saga';
import {
    cardOperations as operations,
    cardTypes as types,
} from '../../redux/modules/card';
import * as mockData from '../../services/mockData';
import API from '../../services/API';

jest.mock('../../services/API');

describe('paymentSaga', () => {
    test('should wait for latest GET_CARD and ADD_CARD actions', () => {
        const saga = operations.paymentSaga();

        expect(saga.next().value).toEqual(
            takeLatest(types.GET_CARD, operations.fetchCard)
        );
        expect(saga.next().value).toEqual(
            takeLatest(types.ADD_CARD, operations.postCard)
        );
    });

    test('should be done for next iteration', () => {
        const saga = operations.paymentSaga();
        saga.next();
        saga.next();

        expect(saga.next().done).toBeTruthy();
    });
});

describe('fetchCard', () => {
    test('dispatches SAVE_CARD action with card data from API', async () => {
        let dispatchedAction = null;
        const saga = runSaga(
            {
                dispatch: (action) => (dispatchedAction = action),
                getState: () => ({ auth: { token: mockData.fakeToken } }),
            },
            operations.fetchCard
        );
        await saga.toPromise();

        expect(dispatchedAction.type).toEqual(types.SAVE_CARD);
        expect(dispatchedAction.payload).toEqual(mockData.fakeCardData);
    });
});

describe('postCard', () => {
    test('calls post card API method and dispatches GET_CARD action on success', async () => {
        const spy = jest.spyOn(API, 'addCard');
        const card = mockData.fakeCardData;
        const token = mockData.fakeToken;

        let dispatchedAction = null;
        const saga = runSaga(
            {
                dispatch: (action) => (dispatchedAction = action),
                getState: () => ({ auth: { token: token } }),
            },
            operations.postCard,
            operations.addCard(card)
        );
        await saga.toPromise();

        expect(spy).toHaveBeenCalledWith(
            card.cardNumber,
            card.expiryDate,
            card.cardName,
            card.cvc,
            token
        );
        expect(dispatchedAction.type).toEqual(types.GET_CARD);
    });
});
