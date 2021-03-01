import React from 'react';
import TariffCard from '../../main/order/tariff_selector/TariffCard';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('TariffCard', () => {
    test('renders correctly with given props', () => {
        const id = 'premium';
        const name = 'Премиум';
        const price = 250;
        const logo = '/path/image.png';
        const isSelected = true;
        render(
            <TariffCard
                id={id}
                name={name}
                price={price}
                logo={logo}
                isSelected={isSelected}
            />
        );

        const card = screen.getByTestId('TariffCard');
        expect(card).toHaveClass('TariffCard--active');
        expect(card).toHaveAttribute('data-id', id);
        const img = screen.getByAltText(name);
        expect(img).toHaveAttribute('src', logo);
        expect(screen.getByText(name)).toBeVisible();
        expect(screen.getByText(`${price} ₽`)).toBeVisible();
    });

    test('fires onClick callback when clicked', () => {
        let onClick = jest.fn();
        render(<TariffCard onClick={onClick} />);

        userEvent.click(screen.getByTestId('TariffCard'));

        expect(onClick).toHaveBeenCalled();
    });
});
