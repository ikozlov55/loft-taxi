import * as types from './types';

const sendOrder = (from, to, tariffId) => {
    return { type: types.SEND_ORDER, payload: { from, to, tariffId } };
};

const deleteOrder = () => {
    return {
        type: types.DELETE_ORDER,
    };
};

export { sendOrder, deleteOrder };
