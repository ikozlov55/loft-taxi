import reducer, { saveCard, deleteCard } from '../../redux/modules/card';

const initialState = {
    isCardAdded: false,
    data: {
        cardNumber: null,
        expiryDate: null,
        cardName: null,
        cvc: null,
    },
};

const testState = {
    isCardAdded: true,
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
        const cardNumber = '2222 2222 2222 2222';
        const expiryDate = '12/26';
        const cardName = 'VALDIMIR VLADIMIROV';
        const cvc = '321';

        const state = reducer(
            undefined,
            saveCard(cardNumber, expiryDate, cardName, cvc)
        );

        expect(state).toEqual({
            isCardAdded: true,
            data: { cardNumber, expiryDate, cardName, cvc },
        });
    });

    test('returns initial state on DELETE_CARD action', () => {
        const state = reducer(testState, deleteCard());

        expect(state).toEqual(initialState);
    });
});
