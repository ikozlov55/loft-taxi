const selectIsCardAdded = (state) => {
    return state.card.isCardAdded;
};

const selectCardData = (state) => {
    return state.card.data;
};

export { selectIsCardAdded, selectCardData };
