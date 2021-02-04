import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../../common/input/Input';
import Button from '../../common/button/Button';
import './RegistrationForm.css';

const RegistrationForm = (props) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        props.onSubmit(email, name, password);
    }

    return (
        <div className='RegistrationForm form-container '>
            <h2 className='form__header' data-testid='RegistrationForm:header'>
                Регистрация
            </h2>
            <form onSubmit={handleSubmit}>
                <Input
                    type='email'
                    id='email'
                    placeholder='mail@mail.ru'
                    label='Email*'
                    onChange={setEmail}
                ></Input>
                <Input
                    type='text'
                    id='name'
                    placeholder='Петр Александрович'
                    label='Как вас зовут?*'
                    onChange={setName}
                ></Input>
                <Input
                    type='password'
                    id='password'
                    placeholder='*************'
                    label='Придумайте пароль*'
                    onChange={setPassword}
                ></Input>
                <Button text='Зарегистрироваться'></Button>
            </form>
            <div className='form__text-block'>
                Уже зарегистрированны?
                <a
                    className='form__link'
                    onClick={props.onLoginClick}
                    data-testid='RegistrationForm:login-link'
                >
                    Войти
                </a>
            </div>
        </div>
    );
};

RegistrationForm.propTypes = {
    onLoginClick: PropTypes.func,
    onSubmit: PropTypes.func,
};

export default RegistrationForm;
