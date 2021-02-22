import reducer, {
    orderOperations as operations,
} from '../../redux/modules/order';

const initialState = {
    isSent: false,
    data: {
        from: null,
        to: null,
        tariffId: null,
    },
};

const testState = {
    isSent: true,
    data: {
        from: 'Мариинский театр',
        to: 'Эрмитаж',
        tariffId: 'premium',
    },
};

describe('order reducer', () => {
    test('returns initial state', () => {
        const state = reducer(undefined, {});

        expect(state).toEqual(initialState);
    });

    test('handles SEND_ORDER action', () => {
        const state = reducer(
            undefined,
            operations.sendOrder(
                testState.data.from,
                testState.data.to,
                testState.data.tariffId
            )
        );

        expect(state).toEqual(testState);
    });

    test('returns initial state on DELETE_ORDER action', () => {
        const state = reducer(undefined, operations.deleteOrder());

        expect(state).toEqual(initialState);
    });
});
