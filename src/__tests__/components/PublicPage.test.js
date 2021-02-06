import React from 'react';
import PublicPage from '../../public/PublicPage';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('PublicPage', () => {
    beforeEach(() => {
        render(<PublicPage></PublicPage>);
    });

    test('renders with login form by default', () => {
        const loginFormHeader = screen.queryByTestId('LoginForm:header');

        expect(loginFormHeader).not.toBeNull();
    });

    test('renders registration form on register link click', () => {
        const registerLink = screen.getByTestId('LoginForm:register-link');

        userEvent.click(registerLink);
        const registrationFormHeader = screen.queryByTestId(
            'RegistrationForm:header'
        );

        expect(registrationFormHeader).not.toBeNull();
    });

    test('renders login form on login link click', () => {
        const registerLink = screen.getByTestId('LoginForm:register-link');
        userEvent.click(registerLink);
        const loginLink = screen.getByTestId('RegistrationForm:login-link');
        userEvent.click(loginLink);
        const loginFormHeader = screen.queryByTestId('LoginForm:header');

        expect(loginFormHeader).not.toBeNull();
    });

    test('renders login form on successful registration', async () => {
        const email = 'admin@mail.ru';
        const name = 'Владимир Владимиров';
        const password = '123456';

        const registerLink = screen.getByTestId('LoginForm:register-link');
        userEvent.click(registerLink);
        const [emailInput, nameInput, passwordInput] = screen.getAllByTestId(
            'Input:input'
        );
        const registerButton = screen.getByTestId('Button:button');

        userEvent.type(emailInput, email);
        userEvent.type(nameInput, name);
        userEvent.type(passwordInput, password);
        userEvent.click(registerButton);

        const loginFormHeader = await screen.findByTestId('LoginForm:header');
        expect(loginFormHeader).not.toBeNull();
    });
});
