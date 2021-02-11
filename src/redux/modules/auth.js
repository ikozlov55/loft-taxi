export const LOGIN = 'loft-taxi/auth/LOGIN';
export const LOGOUT = 'loft-taxi/auth/LOGOUT';
export const AUTHORIZE = 'loft-taxi/auth/AUTHORIZE';

const initialState = {
    isLoggedIn: false,
    token: null,
};

export function login(token) {
    return { type: LOGIN, payload: { token } };
}

export function logout() {
    return { type: LOGOUT };
}

export function authorize(email, password) {
    return { type: AUTHORIZE, payload: { email, password } };
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return { ...state, isLoggedIn: true, token: action.payload.token };
        case LOGOUT:
            return initialState;
        default:
            return state;
    }
}
