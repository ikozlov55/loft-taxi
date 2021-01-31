import React, { useState } from 'react';
import API from './services/API';

const AuthContext = React.createContext();
AuthContext.displayName = 'AuthContext';

const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState(null);

    function login(email, password) {
        API.auth(email, password).then((token) => {
            setIsLoggedIn(true);
            setToken(token);
        });
    }

    function logout() {
        setIsLoggedIn(false);
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {props.children}
        </AuthContext.Provider>
    );
};

const withAuth = (WrappedComponent) => {
    class withAuthComponent extends React.Component {
        render() {
            return <WrappedComponent {...this.context} {...this.props} />;
        }
    }
    withAuthComponent.contextType = AuthContext;
    withAuthComponent.displayName = `withAuth(${WrappedComponent.name})`;
    return withAuthComponent;
};

export { AuthContext, AuthContextProvider, withAuth };
