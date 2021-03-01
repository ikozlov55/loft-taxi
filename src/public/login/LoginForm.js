import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { authSelectors } from '../../redux/modules/auth';
import Input from '../../common/input/Input';
import Button from '../../common/button/Button';
import PropTypes from 'prop-types';
import './LoginForm.css';

const emailRegisterOptions = {
    required: 'Введите Email',
};

const passwordRegisterOptions = {
    required: 'Введите пароль',
};

const LoginForm = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const authError = useSelector(authSelectors.selectError);
    const { register, handleSubmit, errors } = useForm();

    function onSubmit() {
        props.onSubmit(email, password);
    }

    return (
        <div className='LoginForm form-container '>
            <h2 className='form__header' data-testid='LoginForm:header'>
                Войти
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    type='text'
                    name='email'
                    placeholder='mail@mail.ru'
                    label='Email'
                    onChange={setEmail}
                    register={register(emailRegisterOptions)}
                    error={errors.email?.message}
                />
                <Input
                    type='password'
                    name='password'
                    placeholder='*************'
                    label='Пароль'
                    onChange={setPassword}
                    register={register(passwordRegisterOptions)}
                    error={errors.password?.message}
                />
                <button className='form__link--gray'>Забыли пароль?</button>
                <h3 className='form__error'>{authError}</h3>
                <Button text='Войти' />
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

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
};

export default LoginForm;
