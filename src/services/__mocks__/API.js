import * as data from '../mockData';

class API {
    static auth(email, password) {
        return new Promise((resolve, reject) => {
            if (email === 'fail@mail.ru') {
                reject(data.authorizationError);
            } else {
                resolve(data.fakeToken);
            }
        });
    }

    static register(email, name, password) {
        return new Promise((resolve, reject) => {
            if (email === 'fail@mail.ru') {
                reject(data.registrationError);
            } else {
                resolve(data.fakeToken);
            }
        });
    }

    static addCard(cardNumber, expiryDate, cardName, cvc, token) {
        return new Promise((resolve, reject) => {
            if (cardName === 'fail') {
                reject(data.cardAdditionError);
            } else {
                resolve({ success: true });
            }
        });
    }

    static getCard(token) {
        return new Promise((resolve) => {
            resolve(data.fakeCardData);
        });
    }

    static getAddressList() {
        return new Promise((resolve) => {
            resolve(data.fakeAddressList);
        });
    }

    static getRoute(from, to) {
        return new Promise((resolve) => {
            resolve(data.fakeRoute);
        });
    }
}

export default API;
