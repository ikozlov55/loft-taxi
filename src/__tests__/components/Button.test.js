import React from 'react';
import Button from '../../common/button/Button';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('Button component', () => {
    test('renders with text from prop', () => {
        const buttonText = 'Войти';
        render(<Button text={buttonText}></Button>);
        const button = screen.getByRole('button');

        expect(button).toHaveTextContent(buttonText);
    });

    test('can be disabled with prop', () => {
        render(<Button text='Войти' disabled={true}></Button>);
        const button = screen.getByRole('button');

        expect(button).toHaveClass('Button--disabled');
        expect(button).toBeDisabled();
    });

    test('fires onClick callback when clicked', () => {
        let onClickMock = jest.fn();
        render(<Button text='Открыть' onClick={onClickMock}></Button>);

        const button = screen.getByRole('button');
        userEvent.click(button);

        expect(onClickMock).toHaveBeenCalled();
    });
});
