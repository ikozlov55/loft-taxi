const BASE_URL = process.env.REACT_APP_BASE_URL;

const API_URLS = {
    auth: new URL('auth', BASE_URL),
    register: new URL('register', BASE_URL),
    card: new URL('card', BASE_URL),
    route: new URL('route', BASE_URL),
    addressList: new URL('addressList', BASE_URL),
};

const contentTypeJSON = { 'Content-Type': 'application/json' };

const RequestBuilder = {
    auth(email, password) {
        return new Request(API_URLS.auth.href, {
            method: 'POST',
            headers: contentTypeJSON,
            body: JSON.stringify({ email, password }),
        });
    },
    register(email, name, password) {
        const [firstName, lastName] = name.split(' ');
        return new Request(API_URLS.register.href, {
            method: 'POST',
            headers: contentTypeJSON,
            body: JSON.stringify({
                email,
                name: firstName,
                password,
                surname: lastName,
            }),
        });
    },
    getCard(token) {
        const url = API_URLS.card;
        url.search = new URLSearchParams({ token });
        return new Request(url.href);
    },
    addCard(cardNumber, expiryDate, cardName, cvc, token) {
        return new Request(API_URLS.card.href, {
            method: 'POST',
            headers: contentTypeJSON,
            body: JSON.stringify({
                cardNumber,
                expiryDate,
                cardName,
                cvc,
                token,
            }),
        });
    },
    getAddressList() {
        return new Request(API_URLS.addressList.href);
    },
    getRoute(from, to) {
        const url = API_URLS.card;
        url.search = new URLSearchParams({ address1: from, address2: to });
        return new Request(url.href);
    },
};

export default RequestBuilder;
