export const GET_ROUTE = 'loft-taxi/route/GET_ROUTE';
export const SET_ROUTE = 'loft-taxi/route/SET_ROUTE';

const initialState = {
    coordinates: [],
};

export function getRoute() {
    return { type: GET_ROUTE };
}

export function setRoute(coordinates) {
    return { type: SET_ROUTE, payload: { coordinates } };
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_ROUTE:
            return { ...state, coordinates: action.payload.coordinates };
        default:
            return state;
    }
}
