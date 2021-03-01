import reducer from '../../redux/modules/';
import { authOperations } from '../../redux/modules/auth';
import * as mockData from '../../services/mockData';

const testState = {
    auth: { isLoggedIn: true, token: 'recwvBcbVcxH2PFR2', error: null },
    coordinates: mockData.fakeRoute,
};

const initialState = {
    addressList: { addresses: [] },
    auth: { error: null, isLoggedIn: false, token: null },
    card: {
        data: { cardName: null, cardNumber: null, cvc: null, expiryDate: null },
        isAdded: false,
    },
    order: { data: { from: null, tariffId: null, to: null }, isSent: false },
    registration: { error: null },
    route: { coordinates: null },
};

describe('root reducer', () => {
    test('returns initial state', () => {
        const state = reducer(undefined, {});

        expect(state).toEqual(initialState);
    });

    test('clears the whole state on LOGOUT action', () => {
        const state = reducer(testState, authOperations.logout());

        expect(state).toEqual(initialState);
    });
});
