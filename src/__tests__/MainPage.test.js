import React from 'react';
import MainPage from '../main/MainPage';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

jest.mock('../main/map/Map');

describe('MainPage component', () => {
    beforeEach(() => {
        render(<MainPage></MainPage>);
    });
    test('renders map and order form by default', () => {
        const mapContainer = screen.getByTestId('Map:div');
        const orderFormHeader = screen.getByTestId('OrderForm:header');

        expect(mapContainer).toBeInTheDocument();
        expect(orderFormHeader).toBeInTheDocument();
    });

    test('renders profile form on profile button click', () => {
        const profileButton = screen.getByTestId('Header:profile-button');

        userEvent.click(profileButton);

        const profileFormHeader = screen.getByTestId('ProfileForm:header');
        expect(profileFormHeader).toBeInTheDocument();
    });

    test('renders order form again on order button click', async () => {
        const profileButton = screen.getByTestId('Header:profile-button');
        const orderButton = screen.getByTestId('Header:order-button');
        userEvent.click(profileButton);
        await waitFor(() => screen.getByTestId('ProfileForm:header'));

        userEvent.click(orderButton);
        await waitFor(() =>
            expect(screen.getByTestId('OrderForm:header')).toBeInTheDocument()
        );
    });
});
