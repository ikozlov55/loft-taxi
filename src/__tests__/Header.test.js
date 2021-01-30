import React from 'react';
import Header from '../main/header/Header';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('Header component', () => {
    test('renders with active button from prop', () => {
        render(<Header activeButton='profile'></Header>);
        const profileButton = screen.getByTestId('Header:profile-button');

        expect(profileButton).toHaveClass('Header__menu-button--active');
    });

    test.each(['profile', 'order'])(
        'fires onButtonClick callback with clicked button name',
        (buttonName) => {
            const onButtonClick = jest.fn();
            render(<Header onButtonClick={onButtonClick}></Header>);
            const button = screen.getByTestId(`Header:${buttonName}-button`);

            userEvent.click(button);

            expect(onButtonClick).toBeCalledWith(buttonName);
        }
    );

    test('fires logout callback on logout button click', () => {
        const logout = jest.fn();
        render(<Header logout={logout}></Header>);
        const logoutButton = screen.getByTestId('Header:logout-button');

        userEvent.click(logoutButton);

        expect(logout).toBeCalled();
    });
});
