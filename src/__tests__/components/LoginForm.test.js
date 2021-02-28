import React from 'react';
import LoginForm from '../../public/login/LoginForm';
import { screen, waitFor } from '@testing-library/react';
import { render } from '../../services/utils';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('LoginForm', () => {
    test('fires onSubmit callback with email and password on login button click', async () => {
        const onSubmit = jest.fn();
        const email = 'admin@mail.ru';
        const password = '123456';
        render(<LoginForm onSubmit={onSubmit}></LoginForm>);
        const [emailInput, passwordInput] = screen.getAllByTestId(
            'Input:input'
        );
        const loginButton = screen.getByTestId('Button:button');

        userEvent.type(emailInput, email);
        userEvent.type(passwordInput, password);
        userEvent.click(loginButton);

        await waitFor(() =>
            expect(onSubmit).toHaveBeenCalledWith(email, password)
        );
    });

    test('shows error if email and password inputs are empty on login button click', async () => {
        const onSubmit = jest.fn();
        const email = '';
        const password = '';
        render(<LoginForm onSubmit={onSubmit}></LoginForm>);
        const [emailInput, passwordInput] = screen.getAllByTestId(
            'Input:input'
        );
        const loginButton = screen.getByTestId('Button:button');

        userEvent.type(emailInput, email);
        userEvent.type(passwordInput, password);
        userEvent.click(loginButton);

        await waitFor(() => {
            expect(screen.getByText('Введите Email')).toBeVisible();
            expect(screen.getByText('Введите пароль')).toBeVisible();
            expect(onSubmit).not.toHaveBeenCalled();
        });
    });
});
