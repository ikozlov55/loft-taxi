import React from 'react';
import App from '../../App';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

jest.mock('../main/map/Map');

describe('App component', () => {
    test('renders Public Page when not logged in', () => {
        render(<App isLoggedIn={false}></App>);
        const publicPageContainer = screen.getByTestId('PublicPage:container');

        expect(publicPageContainer).toBeInTheDocument();
    });

    test('renders Main Page when logged in', () => {
        render(<App isLoggedIn={true}></App>);
        const mainPageContainer = screen.getByTestId('MainPage:container');

        expect(mainPageContainer).toBeInTheDocument();
    });
});
