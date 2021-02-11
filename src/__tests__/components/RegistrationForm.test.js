import React from 'react';
import RegistrationForm from '../../public/registration/RegistrationForm';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('RegistrationForm', () => {
    test('fires onLoginClick callback on login link click', () => {
        const onLoginClick = jest.fn();
        render(
            <RegistrationForm onLoginClick={onLoginClick}></RegistrationForm>
        );
        const loginLink = screen.getByTestId('RegistrationForm:login-link');

        userEvent.click(loginLink);

        expect(onLoginClick).toHaveBeenCalled();
    });

    test('fires onSubmit function with email, name and password on submit', () => {
        const onSubmit = jest.fn();
        const email = 'admin@mail.ru';
        const name = 'Владимир Владимиров';
        const password = '123456';
        render(<RegistrationForm onSubmit={onSubmit}></RegistrationForm>);
        const [emailInput, nameInput, passwordInput] = screen.getAllByTestId(
            'Input:input'
        );
        const registerButton = screen.getByTestId('Button:button');

        userEvent.type(emailInput, email);
        userEvent.type(nameInput, name);
        userEvent.type(passwordInput, password);
        userEvent.click(registerButton);

        expect(onSubmit).toHaveBeenCalledWith(email, name, password);
    });
});
