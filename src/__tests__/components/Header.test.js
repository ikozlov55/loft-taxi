import React from 'react';
import Header from '../../main/header/Header';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from '../../services/utils';
import '@testing-library/jest-dom';

describe('Header component', () => {
    test('renders properly without crash', () => {
        render(<Header />);

        expect(screen.getByText('Карта')).toBeVisible();
        expect(screen.getByText('Профиль')).toBeVisible();
        expect(screen.getByText('Выйти')).toBeVisible();
    });

    test('fires onLogout callback on logout button click', () => {
        const onLogout = jest.fn();
        render(<Header onLogout={onLogout} />);

        const logoutButton = screen.getByText('Выйти');
        userEvent.click(logoutButton);

        expect(onLogout).toHaveBeenCalledTimes(1);
    });
});
