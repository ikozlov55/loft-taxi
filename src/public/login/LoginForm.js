import React, { useState } from 'react';
import Input from '../../common/input/Input';
import Button from '../../common/button/Button';
import { Link } from 'react-router-dom';
import { login } from '../../redux/modules/auth';
import { useDispatch } from 'react-redux';

import './LoginForm.css';

const LoginForm = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    function handleSubmit(event) {
        event.preventDefault();
        console.log(email, password);
        dispatch(login());
        //login(email, password);
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
                <Link
                    to='/registration'
                    className='form__link'
                    data-testid='LoginForm:register-link'
                >
                    Регистрация
                </Link>
            </div>
        </div>
    );
};

export default LoginForm;
