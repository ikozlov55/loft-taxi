export const GET_ADDRESS_LIST = 'loft-taxi/addressList/GET_ADDRESS_LIST';
export const SET_ADDRESS_LIST = 'loft-taxi/addressList/SET_ADDRESS_LIST';

const initialState = {
    addresses: [],
};

export function getAddressList() {
    return { type: GET_ADDRESS_LIST };
}

export function setAddressList(addresses) {
    return { type: SET_ADDRESS_LIST, payload: { addresses } };
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_ADDRESS_LIST:
            return { ...state, addresses: action.payload.addresses };
        default:
            return state;
    }
}
