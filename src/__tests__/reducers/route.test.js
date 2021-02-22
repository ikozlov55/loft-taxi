import reducer, {
    routeOperations as operations,
} from '../../redux/modules/route';
import * as mockData from '../../services/mockData';

const initialState = {
    coordinates: null,
};

const testState = {
    coordinates: mockData.fakeRoute,
};

describe('route reducer', () => {
    test('returns initial state', () => {
        const state = reducer(undefined, {});

        expect(state).toEqual(initialState);
    });

    test('handles SET_ROUTE action', () => {
        const state = reducer(
            undefined,
            operations.setRoute(testState.coordinates)
        );

        expect(state).toEqual(testState);
    });

    test('returns initial state on DELETE_ROUTE action', () => {
        const state = reducer(undefined, operations.clearRoute());

        expect(state).toEqual(initialState);
    });
});
