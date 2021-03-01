import { takeLatest } from 'redux-saga/effects';
import { runSaga } from 'redux-saga';
import {
    authOperations as operations,
    authTypes as types,
} from '../../redux/modules/auth';
import * as mockData from '../../services/mockData';

jest.mock('../../services/API');

describe('authorizationSaga', () => {
    test('should wait for latest AUTHORIZE action', () => {
        const saga = operations.authorizationSaga();

        expect(saga.next().value).toEqual(
            takeLatest(types.AUTHORIZE, operations.auth)
        );
    });

    test('should be done for next iteration', () => {
        const saga = operations.authorizationSaga();
        saga.next();

        expect(saga.next().done).toBeTruthy();
    });
});

describe('auth', () => {
    test('dispatches LOGIN action on successfull API authorization', async () => {
        let dispatchedAction = null;

        const saga = runSaga(
            { dispatch: (action) => (dispatchedAction = action) },
            operations.auth,
            operations.authorize('zzz@mail.ru', '123456')
        );
        await saga.toPromise();

        expect(dispatchedAction.type).toEqual(types.LOGIN);
        expect(dispatchedAction.payload).toEqual({
            token: mockData.fakeToken,
        });
    });

    test('dispatches AUTHORIZE_FAILED on authorization error', async () => {
        let dispatchedAction = null;

        const saga = runSaga(
            { dispatch: (action) => (dispatchedAction = action) },
            operations.auth,
            operations.authorize('fail@mail.ru', '123456')
        );
        await saga.toPromise();

        expect(dispatchedAction.type).toEqual(types.AUTHORIZE_FAILED);
        expect(dispatchedAction.payload).toEqual({
            error: mockData.authorizationError,
        });
    });
});
