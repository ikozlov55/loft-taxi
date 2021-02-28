import React from 'react';
import App from '../../App';
import { screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { render } from '../../services/utils';
import userEvent from '@testing-library/user-event';

jest.mock('../../main/map/Map');

const loggedInState = {
    auth: {
        isLoggedIn: true,
    },
    card: {
        isAdded: true,
        data: {
            cardNumber: '1111 2222 2332 3232',
            expiryDate: '12/26',
            cardName: 'XXX XXX',
            cvc: '123',
        },
    },
};

const loggedOutState = {
    auth: {
        isLoggedIn: false,
    },
};

describe('App component', () => {
    test('renders Public Page when not logged in', () => {
        render(<App />, loggedOutState);

        expect(screen.getByTestId('PublicPage:container')).toBeVisible();
    });

    test('renders Main Page with order form when logged in', () => {
        render(<App />, loggedInState);

        expect(screen.getByTestId('MainPage:container')).toBeVisible();
        expect(screen.getByTestId('RouteSelector')).toBeVisible();
    });

    test('renders profile form on profile button click', () => {
        render(<App />, loggedInState);

        userEvent.click(screen.getByTestId('Header:profile-button'));

        expect(screen.getByTestId('CreditCard')).toBeVisible();
    });

    test('renders order form again on order button click', async () => {
        render(<App />, loggedInState);
        userEvent.click(screen.getByTestId('Header:profile-button'));
        await waitFor(() => screen.getByTestId('CreditCard'));

        userEvent.click(screen.getByTestId('Header:order-button'));
        await waitFor(() =>
            expect(screen.getByTestId('RouteSelector')).toBeVisible()
        );
    });

    test('renders Public Page on logout click', async () => {
        render(<App />, loggedInState);
        expect(screen.getByTestId('MainPage:container')).toBeVisible();

        userEvent.click(screen.getByText('Выйти'));
        await waitFor(() =>
            expect(screen.getByTestId('PublicPage:container')).toBeVisible()
        );
    });
});
