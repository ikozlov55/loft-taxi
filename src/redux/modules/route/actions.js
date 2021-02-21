import * as types from './types';

const getRoute = (from, to) => {
    return { type: types.GET_ROUTE, payload: { from, to } };
};

const setRoute = (coordinates) => {
    return { type: types.SET_ROUTE, payload: { coordinates } };
};

const deleteRoute = () => {
    return { type: types.DELETE_ROUTE };
};

export { getRoute, setRoute, deleteRoute };
