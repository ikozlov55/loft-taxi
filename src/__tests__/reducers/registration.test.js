import reducer, {
    registraionOperations as operations,
} from '../../redux/modules/registration';

const initialState = {
    error: null,
};

const errorState = {
    error: 'Ошибка регистрации!',
};

describe('registration reducer', () => {
    test('returns initial state', () => {
        const state = reducer(undefined, {});

        expect(state).toEqual(initialState);
    });

    test('handles REGISTRATION_FAILED action', () => {
        const state = reducer(
            undefined,
            operations.failRegistration(errorState.error)
        );

        expect(state).toEqual(errorState);
    });

    test('returns initial state on REGISTRATION action', () => {
        const state = reducer(
            undefined,
            operations.register('test@mail.ru', 'Владимир Владимиров', '123456')
        );

        expect(state).toEqual(initialState);
    });

    test('returns initial state on REGISTRATION_COMPLETED action', () => {
        const state = reducer(undefined, operations.completeRegistration());

        expect(state).toEqual(initialState);
    });
});
