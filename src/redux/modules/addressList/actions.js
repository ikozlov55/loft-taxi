import * as types from './types';

const getAddressList = () => {
    return { type: types.GET_ADDRESS_LIST };
};

const setAddressList = (addresses) => {
    return { type: types.SET_ADDRESS_LIST, payload: { addresses } };
};

export { getAddressList, setAddressList };
