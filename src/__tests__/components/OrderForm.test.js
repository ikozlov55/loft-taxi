import React from 'react';
import OrderForm from '../../main/order/OrderForm';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { render } from '../../services/utils';

jest.mock('../../services/API');

const orderSentState = {
    order: { isSent: true },
    card: { isAdded: true },
};

const orderFormState = {
    order: { isSent: false },
    card: { isAdded: true },
};

const noCardState = {
    order: { isSent: false },
    card: { isAdded: false },
};

describe('OrderForm', () => {
    test('renders info popup if order was sent', () => {
        render(<OrderForm />, orderSentState);

        expect(screen.getByText('Заказ размещен')).toBeVisible();
        expect(
            screen.getByText(
                'Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.'
            )
        ).toBeVisible();
        expect(screen.getByText('Сделать новый заказ')).toBeVisible();
    });

    test('renders info popup if card is not added', () => {
        render(<OrderForm />, noCardState);

        expect(screen.getByText('Заполните платежные данные')).toBeVisible();
        expect(
            screen.getByText(
                'Укажите информацию о банковской карте, чтобы сделать заказ.'
            )
        ).toBeVisible();
        expect(screen.getByText('Перейти в профиль')).toBeVisible();
    });

    test('renders order form if card is added and order was not sent', () => {
        render(<OrderForm />, orderFormState);

        expect(screen.getByTestId('RouteSelector')).toBeVisible();
        expect(screen.getByText('Заказать')).toBeVisible();
    });
});
