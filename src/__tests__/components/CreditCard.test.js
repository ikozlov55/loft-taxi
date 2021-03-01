import React from 'react';
import CreditCard from '../../main/profile/credit_card/CreditCard';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('CreditCard', () => {
    test('renders correctly with given props', () => {
        const expiryDate = '12/26';
        const cardNumber = '1111 2222 3333 4444';

        render(<CreditCard expiryDate={expiryDate} cardNumber={cardNumber} />);

        expect(screen.getByText(expiryDate)).toBeVisible();
        expect(screen.getByText(cardNumber)).toBeVisible();
    });
});
