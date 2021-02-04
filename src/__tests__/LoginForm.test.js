import React from 'react';
import LoginForm from '../public/login/LoginForm';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('LoginForm', () => {
    test('fires onRegisterClick callback on register link click', () => {
        const onRegisterClick = jest.fn();
        render(<LoginForm onRegisterClick={onRegisterClick}></LoginForm>);

        const registerLink = screen.getByTestId('LoginForm:register-link');
        userEvent.click(registerLink);

        expect(onRegisterClick).toHaveBeenCalled();
    });

    test('fires login callback with email and password on submit', () => {
        const login = jest.fn();
        const email = 'admin@mail.ru';
        const password = '123456';
        render(<LoginForm login={login}></LoginForm>);
        const [emailInput, passwordInput] = screen.getAllByTestId(
            'Input:input'
        );
        const loginButton = screen.getByTestId('Button:button');

        userEvent.type(emailInput, email);
        userEvent.type(passwordInput, password);
        userEvent.click(loginButton);

        expect(login).toHaveBeenCalledWith(email, password);
    });
});
