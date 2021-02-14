const storageKey = 'loft-taxi';

const localStorageService = {
    saveState(state) {
        localStorage.setItem(storageKey, JSON.stringify(state));
    },

    getState() {
        return JSON.parse(localStorage.getItem(storageKey));
    },

    clear() {
        localStorage.clear();
    },
};

export default localStorageService;
