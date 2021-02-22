import { takeLatest } from 'redux-saga/effects';
import { runSaga } from 'redux-saga';
import {
    addressListOperations as operations,
    addressListTypes as types,
} from '../../redux/modules/addressList';
import * as mockData from '../../services/mockData';

jest.mock('../../services/API');

describe('addressListSaga', () => {
    test('should wait for latest GET_ADDRESS_LIST action', () => {
        const saga = operations.addressListSaga();

        expect(saga.next().value).toEqual(
            takeLatest(types.GET_ADDRESS_LIST, operations.fetchAddressList)
        );
    });

    test('should be done for next iteration', () => {
        const saga = operations.addressListSaga();
        saga.next();

        expect(saga.next().done).toBeTruthy();
    });
});

describe('fetchAddressList', () => {
    test('dispatches SET_ADDRESS_LIST action with address list from API', async () => {
        let dispatchedAction = null;

        const saga = runSaga(
            { dispatch: (action) => (dispatchedAction = action) },
            operations.fetchAddressList
        );
        await saga.toPromise();

        expect(dispatchedAction.type).toEqual(types.SET_ADDRESS_LIST);
        expect(dispatchedAction.payload).toEqual({
            addresses: mockData.fakeAddressList,
        });
    });
});
