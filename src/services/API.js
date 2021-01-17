class API {
    static login(email, password) {
        return new Promise((resolve, reject) => {
            if (email === 'test@test.com' && password === '123123') {
                setTimeout(resolve, 1000);
            } else {
                setTimeout(reject, 1000);
            }
        });
    }

    static register(email, name, password) {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000);
        });
    }
}
export default API;
