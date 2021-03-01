import React from 'react';
import RegistrationForm from '../../public/registration/RegistrationForm';
import { screen, waitFor } from '@testing-library/react';
import { render } from '../../services/utils';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('RegistrationForm', () => {
    test.each([
        ['', 'Владимир Владимиров', '123456'],
        ['admin@mail.ru', '', '123456'],
        ['admin@mail.ru', 'Владимир Владимиров', ''],
    ])(
        'registration button is disabled if any form field is empty',
        (email, name, password) => {
            render(<RegistrationForm />);
            const [
                emailInput,
                nameInput,
                passwordInput,
            ] = screen.getAllByTestId('Input:input');

            userEvent.type(emailInput, email);
            userEvent.type(nameInput, name);
            userEvent.type(passwordInput, password);

            const registerButton = screen.getByTestId('Button:button');
            expect(registerButton).toHaveClass('Button--disabled');
            expect(registerButton).toBeDisabled();
        }
    );

    test('fires onSubmit function with email, name and password on submit', async () => {
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

        await waitFor(() =>
            expect(onSubmit).toHaveBeenCalledWith(email, name, password)
        );
    });

    test.each([
        [
            'invalidemail',
            'Владимир Владимиров',
            '123456',
            'Введите корректный Email',
        ],
        [
            '@mail.ru',
            'Владимир Владимиров',
            '123456',
            'Введите корректный Email',
        ],
        ['mail@mail.ru', 'Владимир', '123456', 'Введите имя и фамилию'],
        [
            'mail@mail.ru',
            'Владимир Владимиров',
            '12345',
            'Минимальная длина пароля 6 символов',
        ],
    ])(
        'on input: %s, %s, %s shows error: "%s"',
        async (email, name, password, error) => {
            const onSubmit = jest.fn();
            render(<RegistrationForm onSubmit={onSubmit}></RegistrationForm>);
            const [
                emailInput,
                nameInput,
                passwordInput,
            ] = screen.getAllByTestId('Input:input');
            const registerButton = screen.getByTestId('Button:button');

            userEvent.type(emailInput, email);
            userEvent.type(nameInput, name);
            userEvent.type(passwordInput, password);
            userEvent.click(registerButton);

            await waitFor(() => {
                expect(onSubmit).not.toHaveBeenCalled();
                expect(screen.getByText(error)).toBeVisible();
            });
        }
    );
});
