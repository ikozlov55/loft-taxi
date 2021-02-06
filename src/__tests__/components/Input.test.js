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
        'renders %s input with id: %s, label: %s, value: %s and placeholder: %s',
        (type, id, label, value, placeholder) => {
            render(
                <Input
                    type={type}
                    id={id}
                    label={label}
                    value={value}
                    placeholder={placeholder}
                ></Input>
            );
            const inputLabel = screen.getByTestId('Input:label');
            const input = screen.getByTestId('Input:input');

            expect(inputLabel).toHaveAttribute('for', id);
            expect(inputLabel).toHaveTextContent(label);

            expect(input).toHaveAttribute('type', type);
            expect(input).toHaveAttribute('id', id);
            expect(input).toHaveAttribute('value', value);
            expect(input).toHaveAttribute('placeholder', placeholder);
        }
    );

    test('fires onChange callback when eddited', () => {
        const text = 'Lorem ipsum dolor sit amet consectetur';
        let expectedText = '';
        function onChange(value) {
            expectedText = value;
        }
        render(<Input type='text' id='textInput' onChange={onChange}></Input>);
        const input = screen.getByTestId('Input:input');

        userEvent.type(input, text);

        expect(input).toHaveValue(expectedText);
    });
});
