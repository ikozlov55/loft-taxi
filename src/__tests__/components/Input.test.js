import React from 'react';
import Input from '../../common/input/Input';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('Input component', () => {
    test.each([
        ['text', 'textInput', '', '', 'Семён'],
        ['email', 'emailInput', 'Email', '', 'mail@mail.ru'],
        ['password', 'passwordInput', 'Пароль', '', ''],
    ])(
        'renders %s input with name: %s, label: %s, value: %s and placeholder: %s',
        (type, name, label, value, placeholder) => {
            render(
                <Input
                    type={type}
                    name={name}
                    label={label}
                    value={value}
                    placeholder={placeholder}
                ></Input>
            );
            const inputLabel = screen.getByTestId('Input:label');
            const input = screen.getByTestId('Input:input');

            expect(inputLabel).toHaveAttribute('for', name);
            expect(inputLabel).toHaveTextContent(label);
            expect(input).toHaveAttribute('type', type);
            expect(input).toHaveAttribute('id', name);
            expect(input).toHaveAttribute('name', name);
            expect(input).toHaveAttribute('value', value);
            expect(input).toHaveAttribute('placeholder', placeholder);
        }
    );

    test('has text type by defaullt', () => {
        render(<Input name='login'></Input>);

        const input = screen.getByTestId('Input:input');

        expect(input).toHaveAttribute('type', 'text');
    });

    test('can show error', () => {
        const error = 'Ошибка авторизации!';
        render(<Input name='login' error={error}></Input>);

        expect(screen.getByText(error)).toBeVisible();
    });

    test('fires onChange callback when eddited', () => {
        const text = 'Lorem ipsum dolor sit amet consectetur';
        let expectedText = '';
        function onChange(value) {
            expectedText = value;
        }
        render(<Input type='text' name='login' onChange={onChange}></Input>);
        const input = screen.getByTestId('Input:input');

        userEvent.type(input, text);

        expect(input).toHaveValue(expectedText);
    });
});
