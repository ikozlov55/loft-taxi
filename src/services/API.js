import RequestBuilder from './RequestBuilder';

function fetchRequest(
    request,
    validator = (result) => result.success,
    onSuccess = (resolve, _) => resolve()
) {
    return new Promise((resolve, reject) => {
        fetch(request)
            .then((response) => response.json())
            .then((result) => {
                if (validator(result)) {
                    onSuccess(resolve, result);
                } else {
                    reject(result.error);
                }
            })
            .catch((error) => reject(error));
    });
}

function isSuccessAndHasToken(result) {
    return result.success && result.token;
}

function resolveWithToken(resolve, result) {
    resolve(result.token);
}

class API {
    static auth(email, password) {
        const request = RequestBuilder.auth(email, password);

        return fetchRequest(request, isSuccessAndHasToken, resolveWithToken);
    }

    static register(email, name, password) {
        const request = RequestBuilder.register(email, name, password);

        return fetchRequest(request, isSuccessAndHasToken, resolveWithToken);
    }

    static addCard(cardNumber, expiryDate, cardName, cvc, token) {
        const request = RequestBuilder.addCard(
            cardNumber,
            expiryDate,
            cardName,
            cvc,
            token
        );

        return fetchRequest(request);
    }

    static getCard(token) {
        const request = RequestBuilder.getCard(token);

        return fetchRequest(
            request,
            (result) =>
                result.cardNumber &&
                result.expiryDate &&
                result.cardName &&
                result.cvc,
            (resolve, result) => resolve(result)
        );
    }

    static getAddressList() {
        const request = RequestBuilder.getAddressList();

        return fetchRequest(
            request,
            (result) => result.addresses,
            (resolve, result) => resolve(result.addresses)
        );
    }

    static getRoute(from, to) {
        const request = RequestBuilder.getRoute(from, to);

        return fetchRequest(
            request,
            (result) => Array.isArray(result) && result.length > 0,
            (resolve, coordinates) => resolve(coordinates)
        );
    }
}
export default API;
