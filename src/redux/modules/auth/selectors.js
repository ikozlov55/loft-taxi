const selectIsLoggedIn = (state) => {
    return state.auth.isLoggedIn;
};

const selectToken = (state) => {
    return state.auth.token;
};
export { selectIsLoggedIn, selectToken };
