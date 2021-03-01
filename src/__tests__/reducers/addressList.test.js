import reducer, {
    addressListOperations as operations,
} from '../../redux/modules/addressList';
import * as mockData from '../../services/mockData';

const initialState = {
    addresses: [],
};

describe('addressList reducer', () => {
    test('returns initial state', () => {
        const state = reducer(undefined, {});

        expect(state).toEqual(initialState);
    });

    test('should handle SET_ADDRESS_LIST action', () => {
        const addresses = mockData.fakeAddressList;
        const state = reducer(undefined, operations.setAddressList(addresses));

        expect(state).toEqual({ addresses: addresses });
    });
});
