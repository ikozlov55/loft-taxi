import React from 'react';
import LoginForm from './login/LoginForm';
import RegistrationForm from './registration/RegistrationForm';
import API from '../services/API';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import logo from './logo.png';
import './PublicPage.css';

const PublicPage = () => {
    const history = useHistory();

    function handleRegistration(email, name, password) {
        API.register(email, name, password).then(history.push('/login'));
    }

    return (
        <div className='PublicPage' data-testid='PublicPage:container'>
            <div className='PublicPage__logo-col'>
                <img className='PublicPage__logo' src={logo} alt='Loft Taxi' />
            </div>
            <div className='PublicPage__form-col'>
                <Switch>
                    <Route path='/login'>
                        <LoginForm />
                    </Route>
                    <Route path='/registration'>
                        <RegistrationForm onSubmit={handleRegistration} />
                    </Route>
                    <Route exact path='/'>
                        <Redirect to='/login' />
                    </Route>
                    <Route path='/'>
                        <Redirect to='/registration' />
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default PublicPage;
