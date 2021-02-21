const selectIsLoggedIn = (state) => {
    return state.auth.isLoggedIn;
};

const selectToken = (state) => {
    return state.auth.token;
};

const selectError = (state) => {
    return state.auth.error;
};

export { selectIsLoggedIn, selectToken, selectError };
