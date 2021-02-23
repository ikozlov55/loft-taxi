import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Input from '../../common/input/Input';
import Button from '../../common/button/Button';
import { registraionSelectors } from '../../redux/modules/registration';
import './RegistrationForm.css';

const emailRegisterOptions = {
    required: 'Введите Email',
    pattern: {
        value: /.+@.+/,
        message: 'Введите корректный Email',
    },
};

const nameRegisterOptions = {
    required: 'Введите имя',
    pattern: {
        value: /[a-яА-Я]+ [a-яА-Я]+/,
        message: 'Введите имя и фамилию',
    },
};

const passwordRegisterOptions = {
    required: 'Введите пароль',
    minLength: {
        value: 6,
        message: 'Минимальная длина пароля 6 символов',
    },
};

const RegistrationForm = (props) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const registrationError = useSelector(registraionSelectors.selectError);
    const { register, handleSubmit, errors } = useForm();

    function onSubmit() {
        props.onSubmit(email, name, password);
    }

    return (
        <div className='RegistrationForm form-container '>
            <h2 className='form__header' data-testid='RegistrationForm:header'>
                Регистрация
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    type='text'
                    name='email'
                    placeholder='mail@mail.ru'
                    label='Email*'
                    onChange={setEmail}
                    register={register(emailRegisterOptions)}
                    error={errors.email?.message}
                />
                <Input
                    type='text'
                    name='name'
                    placeholder='Петр Александрович'
                    label='Как вас зовут?*'
                    onChange={setName}
                    register={register(nameRegisterOptions)}
                    error={errors.name?.message}
                />
                <Input
                    type='password'
                    name='password'
                    placeholder='*************'
                    label='Придумайте пароль*'
                    onChange={setPassword}
                    register={register(passwordRegisterOptions)}
                    error={errors.password?.message}
                />
                <h3 className='form__error'>{registrationError}</h3>
                <Button
                    text='Зарегистрироваться'
                    disabled={!(email && name && password)}
                />
            </form>
            <div className='form__text-block'>
                Уже зарегистрированны?
                <Link
                    to='/login'
                    className='form__link'
                    data-testid='RegistrationForm:login-link'
                >
                    Войти
                </Link>
            </div>
        </div>
    );
};

RegistrationForm.propTypes = {
    onSubmit: PropTypes.func,
};

export default RegistrationForm;
