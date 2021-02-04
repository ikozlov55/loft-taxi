import React from 'react';
import ProfileForm from '../main/profile/ProfileForm';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('ProfileForm component', () => {
    test('renders successfully', () => {
        render(<ProfileForm></ProfileForm>);
        const header = screen.getByTestId('ProfileForm:header');

        expect(header).toBeInTheDocument();
        expect(header).toHaveTextContent('Профиль');
    });
});
