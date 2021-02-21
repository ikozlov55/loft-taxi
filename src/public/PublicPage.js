import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './login/LoginForm';
import RegistrationForm from './registration/RegistrationForm';
import { registraionOperations } from '../redux/modules/registration';
import { authOperations } from '../redux/modules/auth';
import logo from './logo.png';
import './PublicPage.css';

const PublicPage = () => {
    const dispatch = useDispatch();

    function handleRegistration(email, name, password) {
        dispatch(registraionOperations.register(email, name, password));
    }

    function handleLogin(email, password) {
        dispatch(authOperations.authorize(email, password));
    }

    return (
        <div className='PublicPage' data-testid='PublicPage:container'>
            <div className='PublicPage__logo-col'>
                <img className='PublicPage__logo' src={logo} alt='Loft Taxi' />
            </div>
            <div className='PublicPage__form-col'>
                <Switch>
                    <Route path='/login'>
                        <LoginForm onSubmit={handleLogin} />
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
