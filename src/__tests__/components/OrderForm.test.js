import React from 'react';
import OrderForm from '../../main/order/OrderForm';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('OrderForm component', () => {
    test('renders successfully', () => {
        render(<OrderForm></OrderForm>);
        const header = screen.getByTestId('OrderForm:header');

        expect(header).toBeInTheDocument();
        expect(header).toHaveTextContent('Заказ');
    });
});
