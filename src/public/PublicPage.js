import React from 'react';
import LoginForm from './login/LoginForm';
import RegistrationForm from './registration/RegistrationForm';
import API from '../services/API';

class PublicPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: 'login',
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.handleRegistration = this.handleRegistration.bind(this);
    }

    handleLogin(email, password) {
        API.login(email, password).then(() => {
            this.props.onLogin();
        });
    }

    handleRegistration(email, name, password) {
        API.register(email, name, password).then(() => {
            console.log(`Registered as ${email} ${name} ${password}`);
            this.setState({ form: 'login' });
        });
    }

    render() {
        if (this.state.form === 'login') {
            return (
                <LoginForm
                    onRegisterClick={() =>
                        this.setState({ form: 'registration' })
                    }
                    onSubmit={this.handleLogin}
                ></LoginForm>
            );
        } else if (this.state.form === 'registration') {
            return (
                <RegistrationForm
                    onLoginClick={() => this.setState({ form: 'login' })}
                    onSubmit={this.handleRegistration}
                ></RegistrationForm>
            );
        } else {
            return null;
        }
    }
}

export default PublicPage;
