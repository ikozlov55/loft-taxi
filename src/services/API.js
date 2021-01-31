const BASE_URL = process.env.REACT_APP_BASE_URL;

const API_URLS = {
    get auth() {
        return new URL('auth', BASE_URL);
    },
    get register() {
        return new URL('register', BASE_URL);
    },
    get card() {
        return new URL('card', BASE_URL);
    },
    get route() {
        return new URL('route', BASE_URL);
    },
    get addressList() {
        return new URL('addressList', BASE_URL);
    },
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
    postCard(cardNumber, expiryDate, cardName, cvc, token) {
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
};

class API {
    static auth(email, password) {
        const request = RequestBuilder.auth(email, password);

        return new Promise((resolve, reject) => {
            fetch(request)
                .then((response) => {
                    response.json().then((result) => {
                        if (result.success && result.token) {
                            resolve(result.token);
                        } else {
                            reject(result.error);
                        }
                    });
                })
                .catch((error) => reject(error));
        });
    }

    static register(email, name, password) {
        const request = RequestBuilder.register(email, name, password);

        return new Promise((resolve, reject) => {
            fetch(request)
                .then((response) => {
                    response.json().then((result) => {
                        if (result.success && result.token) {
                            resolve(result.token);
                        } else {
                            reject(result.error);
                        }
                    });
                })
                .catch((error) => reject(error));
        });
    }
}
export default API;
