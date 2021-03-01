import reducer, {
    cardOperations as operations,
} from '../../redux/modules/card';

const initialState = {
    isAdded: false,
    data: {
        cardNumber: null,
        expiryDate: null,
        cardName: null,
        cvc: null,
    },
};

const testState = {
    isAdded: true,
    data: {
        cardNumber: '1111 1111 1111 1111',
        expiryDate: '12/25',
        cardName: 'VALDIMIR VLADIMIROV',
        cvc: '123',
    },
};

describe('card reducer', () => {
    test('returns initial state', () => {
        const state = reducer(undefined, {});

        expect(state).toEqual(initialState);
    });

    test('handles SAVE_CARD action', () => {
        const state = reducer(undefined, operations.saveCard(testState.data));

        expect(state).toEqual(testState);
    });

    test('returns initial state on DELETE_CARD action', () => {
        const state = reducer(testState, operations.deleteCard());

        expect(state).toEqual(initialState);
    });
});
