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
        this.renderForm = this.renderForm.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleRegistration = this.handleRegistration.bind(this);
    }

    handleLogin(email, password) {
        API.login(email, password).then(
            () => {
                console.log(`Logged in as ${email} ${password}`);
                this.props.onLogin();
            },
            () => {
                console.log('Authorization error!');
            }
        );
    }

    handleRegistration(email, name, password) {
        API.register(email, name, password).then(() => {
            console.log(`Registered as ${email} ${name} ${password}`);
            this.setState({ form: 'login' });
        });
    }

    renderForm(type) {
        switch (type) {
            case 'registration':
                return (
                    <RegistrationForm
                        onLoginClick={() => this.setState({ form: 'login' })}
                        onSubmit={this.handleRegistration}
                    ></RegistrationForm>
                );
            default:
                return (
                    <LoginForm
                        onRegisterClick={() =>
                            this.setState({ form: 'registration' })
                        }
                        onSubmit={this.handleLogin}
                    ></LoginForm>
                );
        }
    }

    render() {
        return <div>{this.renderForm(this.state.form)}</div>;
    }
}

export default PublicPage;
