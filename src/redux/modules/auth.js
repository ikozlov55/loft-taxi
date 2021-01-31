const LOGIN = 'loft-taxi/auth/login';
const LOGOUT = 'loft-taxi/auth/logout';

const initialState = {
    isLoggedIn: false,
};

export function login() {
    return { type: LOGIN };
}

export function logout() {
    return { type: LOGOUT };
}

export function selectIsLoggedIn(state) {
    return state.isLoggedIn;
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return { ...state, isLoggedIn: true };
        case LOGOUT:
            return { ...state, isLoggedIn: false };
        default:
            return state;
    }
}
