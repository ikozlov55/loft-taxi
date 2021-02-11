import reducer, { login, logout } from '../../redux/modules/auth';

const initialState = {
    isLoggedIn: false,
    token: null,
};

const testState = {
    isLoggedIn: true,
    token: 'testState token',
};

describe('auth reducer', () => {
    test('returns initial state', () => {
        const state = reducer(undefined, {});

        expect(state).toEqual(initialState);
    });

    test('handles LOGIN action', () => {
        const token = 'authorization token';
        const state = reducer(undefined, login(token));

        expect(state).toEqual({ isLoggedIn: true, token: token });
    });

    test('returns initial state on LOGOUT action', () => {
        const state = reducer(testState, logout());

        expect(state).toEqual(initialState);
    });
});
