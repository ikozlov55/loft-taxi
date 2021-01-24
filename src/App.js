import React from 'react';
import MainPage from './main/MainPage';
import PublicPage from './public/PublicPage';
import AuthContext from './AuthContext';
import API from './services/API';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
        };
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    login(email, password) {
        API.login(email, password).then(() => {
            this.setState({ isLoggedIn: true });
        });
    }

    logout() {
        this.setState({ isLoggedIn: false });
    }

    render() {
        return (
            <AuthContext.Provider
                value={{
                    isLoggedIn: this.state.isLoggedIn,
                    login: this.login,
                    logout: this.logout,
                }}
            >
                {this.state.isLoggedIn ? <MainPage /> : <PublicPage />}
            </AuthContext.Provider>
        );
    }
}

export default App;
