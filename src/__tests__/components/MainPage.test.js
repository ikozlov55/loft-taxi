import React from 'react';
import MainPage from '../../main/MainPage';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { render } from '../../services/utils';

jest.mock('../../main/map/Map');

describe('MainPage', () => {
    test('renders without crash', () => {
        render(<MainPage />);

        expect(screen.getByTestId('Map:div')).toBeVisible();
    });
});
