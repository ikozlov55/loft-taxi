import API from '../../services/API';
import { AUTHORIZE, login } from '../modules/auth';

const authorizeMiddleware = ({ dispatch }) => (next) => (action) => {
    if (action.type === AUTHORIZE) {
        const { email, password } = action.payload;
        API.auth(email, password).then((token) => dispatch(login(token)));
    } else {
        next(action);
    }
};

export default authorizeMiddleware;
