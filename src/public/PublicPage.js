import React from 'react';
import LoginForm from './login/LoginForm';
import RegistrationForm from './registration/RegistrationForm';
import API from '../services/API';
import logo from './logo.png';
import './PublicPage.css';

class PublicPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: 'login',
        };
        this.handleRegistration = this.handleRegistration.bind(this);
        this.renderForm = this.renderForm.bind(this);
    }

    handleRegistration(email, name, password) {
        API.register(email, name, password).then(() => {
            this.setState({ form: 'login' });
        });
    }

    renderForm() {
        if (this.state.form === 'login') {
            return (
                <LoginForm
                    onRegisterClick={() =>
                        this.setState({ form: 'registration' })
                    }
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
    render() {
        return (
            <div className='PublicPage' data-testid='PublicPage:container'>
                <div className='PublicPage__logo-col'>
                    <img
                        className='PublicPage__logo'
                        src={logo}
                        alt='Loft Taxi'
                    />
                </div>
                <div className='PublicPage__form-col'>{this.renderForm()}</div>
            </div>
        );
    }
}

export default PublicPage;
