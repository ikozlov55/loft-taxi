export function selectIsLoggedIn(state) {
    return state.auth.isLoggedIn;
}

export function selectToken(state) {
    return state.auth.token;
}

export function selectIsCardAdded(state) {
    return state.card.isCardAdded;
}

export function selectCardData(state) {
    return state.card.data;
}

export function selectAddresses(state) {
    return state.addressList.addresses;
}

export function selectCoordinates(state) {
    return state.route.coordinates;
}
