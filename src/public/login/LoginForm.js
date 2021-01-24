import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../../common/input/Input';
import Button from '../../common/button/Button';
import AuthContext from '../../AuthContext';
import './LoginForm.css';

const LoginForm = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const context = useContext(AuthContext);

    function handleSubmit(event) {
        event.preventDefault();
        context.login(email, password);
    }

    return (
        <div className='LoginForm form-container '>
            <h2 className='form__header' data-testid='LoginForm:header'>
                Войти
            </h2>
            <form onSubmit={handleSubmit}>
                <Input
                    type='email'
                    id='email'
                    placeholder='mail@mail.ru'
                    label='Email'
                    onChange={setEmail}
                ></Input>
                <Input
                    type='password'
                    id='password'
                    placeholder='*************'
                    label='Пароль'
                    onChange={setPassword}
                ></Input>
                <a className='form__link--gray'>Забыли пароль?</a>
                <Button text='Войти'></Button>
            </form>
            <div className='form__text-block'>
                Новый пользователь?
                <a
                    className='form__link'
                    onClick={props.onRegisterClick}
                    data-testid='LoginForm:register-link'
                >
                    Регистрация
                </a>
            </div>
        </div>
    );
};

LoginForm.propTypes = {
    onRegisterClick: PropTypes.func,
};

export default LoginForm;
