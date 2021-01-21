import React from 'react';
import MapPage from './main/MapPage';
import PublicPage from './public/PublicPage';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthorized: false,
        };
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    login() {
        this.setState({ isAuthorized: true });
    }

    logout() {
        this.setState({ isAuthorized: false });
    }

    render() {
        if (this.state.isAuthorized) {
            return <MapPage onLogoutClick={this.logout}></MapPage>;
        } else {
            return <PublicPage onLogin={this.login}></PublicPage>;
        }
    }
}

export default App;
