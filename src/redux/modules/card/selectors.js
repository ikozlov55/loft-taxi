const selectIsCardAdded = (state) => {
    return state.card.isAdded;
};

const selectCardData = (state) => {
    return state.card.data;
};

export { selectIsCardAdded, selectCardData };
