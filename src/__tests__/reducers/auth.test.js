import reducer, {
    authOperations as operations,
} from '../../redux/modules/auth';

const initialState = {
    isLoggedIn: false,
    token: null,
    error: null,
};

const loggedInState = {
    isLoggedIn: true,
    token: 'loggedInState token',
    error: null,
};

const errorState = {
    isLoggedIn: false,
    token: null,
    error: 'Ошибка Авторизации!',
};

describe('auth reducer', () => {
    test('returns initial state', () => {
        const state = reducer(undefined, {});

        expect(state).toEqual(initialState);
    });

    test('handles LOGIN action', () => {
        const state = reducer(undefined, operations.login(loggedInState.token));

        expect(state).toEqual(loggedInState);
    });

    test('handles AUTHORIZE_FAILED action', () => {
        const state = reducer(
            undefined,
            operations.failAuthorize(errorState.error)
        );

        expect(state).toEqual(errorState);
    });

    test('returns initial state on LOGOUT action', () => {
        const state = reducer(undefined, operations.logout);

        expect(state).toEqual(initialState);
    });
});
