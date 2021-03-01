import React from 'react';
import TariffSelector from '../../main/order/tariff_selector/TariffSelector';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

const tariffs = [
    {
        id: 'standart',
        name: 'Стандарт',
        price: 150,
        logo: '/tariffStandartLogo.png',
    },
    {
        id: 'premium',
        name: 'Премиум',
        price: 250,
        logo: '/tariffPremiumLogo.png',
    },
    {
        id: 'business',
        name: 'Бизнес',
        price: 300,
        logo: '/tariffBusinessLogo.png',
    },
];

describe('TariffSelector', () => {
    test('renders list of given tariff objects', () => {
        render(<TariffSelector tariffs={tariffs} />);

        let cardElements = screen.getAllByTestId('TariffCard');
        for (let [i, card] of tariffs.entries()) {
            expect(cardElements[i]).toHaveAttribute('data-id', card.id);
            const img = screen.getByAltText(card.name);
            expect(img).toHaveAttribute('src', card.logo);
            expect(screen.getByText(card.name)).toBeVisible();
            expect(screen.getByText(`${card.price} ₽`)).toBeVisible();
        }
    });

    test('renders tariff with id = selectedTariffId as active', () => {
        const selectedTariffId = tariffs[1].id;
        render(
            <TariffSelector
                tariffs={tariffs}
                selectedTariffId={selectedTariffId}
            />
        );

        let cardElements = screen.getAllByTestId('TariffCard');
        expect(cardElements[1]).toHaveClass('TariffCard--active');
    });

    test('passes handleCardClick callback prop to each tariff card', () => {
        const onCardClick = jest.fn();
        render(<TariffSelector tariffs={tariffs} onCardClick={onCardClick} />);

        let cardElements = screen.getAllByTestId('TariffCard');
        cardElements.forEach(userEvent.click);

        expect(onCardClick).toHaveBeenCalledTimes(3);
    });
});
