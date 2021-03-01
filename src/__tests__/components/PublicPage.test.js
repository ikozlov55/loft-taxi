import React from 'react';
import PublicPage from '../../public/PublicPage';
import { screen, waitFor } from '@testing-library/react';
import { render } from '../../services/utils';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import API from '../../services/API';
import { registrationError, authorizationError } from '../../services/mockData';

jest.mock('../../services/API');

describe('PublicPage', () => {
    test('renders with login form by default', () => {
        render(<PublicPage />);

        expect(screen.getByTestId('LoginForm:header')).toBeVisible();
    });

    test('renders registration form on register link click', () => {
        render(<PublicPage />);

        userEvent.click(screen.getByTestId('LoginForm:register-link'));
        const registrationFormHeader = screen.queryByTestId(
            'RegistrationForm:header'
        );

        expect(registrationFormHeader).toBeVisible();
    });

    test('renders login form on login link click', async () => {
        render(<PublicPage />);

        userEvent.click(screen.getByTestId('LoginForm:register-link'));
        userEvent.click(screen.getByTestId('RegistrationForm:login-link'));

        expect(screen.queryByTestId('LoginForm:header')).toBeVisible();
    });

    test('calls API register method and shows error message on fail', async () => {
        render(<PublicPage />);
        const spy = jest.spyOn(API, 'register');
        const email = 'fail@mail.ru';
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

        await waitFor(() => {
            expect(spy).toHaveBeenCalledWith(email, name, password);
            expect(screen.getByText(registrationError)).toBeVisible();
        });
    });

    test('calls API login method and shows error message on fail', async () => {
        render(<PublicPage />);
        const spy = jest.spyOn(API, 'auth');
        const email = 'fail@mail.ru';
        const password = '123456';

        const [emailInput, passwordInput] = screen.getAllByTestId(
            'Input:input'
        );
        const registerButton = screen.getByTestId('Button:button');
        userEvent.type(emailInput, email);
        userEvent.type(passwordInput, password);
        userEvent.click(registerButton);

        await waitFor(() => {
            expect(spy).toHaveBeenCalledWith(email, password);
            expect(screen.getByText(authorizationError)).toBeVisible();
        });
    });
});
