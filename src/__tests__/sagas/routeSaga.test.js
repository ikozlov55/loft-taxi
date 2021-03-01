import { takeLatest } from 'redux-saga/effects';
import { runSaga } from 'redux-saga';
import {
    routeOperations as operations,
    routeTypes as types,
} from '../../redux/modules/route';
import * as mockData from '../../services/mockData';
import API from '../../services/API';

jest.mock('../../services/API');

describe('routeSaga', () => {
    test('should wait for latest GET_ROUTE action', () => {
        const saga = operations.routeSaga();

        expect(saga.next().value).toEqual(
            takeLatest(types.GET_ROUTE, operations.fetchRoute)
        );
    });

    test('should be done for next iteration', () => {
        const saga = operations.routeSaga();
        saga.next();

        expect(saga.next().done).toBeTruthy();
    });
});

describe('fetchRoute', () => {
    test('call getRoute API method and dispatches SET_ROUTE action with route coordinates on success', async () => {
        const spy = jest.spyOn(API, 'getRoute');
        const from = 'Эрмитаж';
        const to = 'Кинотеатр Аврора';
        let dispatchedAction = null;

        const saga = runSaga(
            {
                dispatch: (action) => (dispatchedAction = action),
                getState: () => ({ auth: { token: mockData.fakeToken } }),
            },
            operations.fetchRoute,
            operations.getRoute(from, to)
        );
        await saga.toPromise();

        expect(spy).toHaveBeenCalledWith(from, to);
        expect(dispatchedAction.type).toEqual(types.SET_ROUTE);
        expect(dispatchedAction.payload).toEqual({
            coordinates: mockData.fakeRoute,
        });
    });
});
