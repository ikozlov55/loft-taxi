import React from 'react';
import ProfileForm from '../../main/profile/ProfileForm';
import { screen, waitFor } from '@testing-library/react';
import { render } from '../../services/utils';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { fakeCardData } from '../../services/mockData';
import API from '../../services/API';
jest.mock('../../services/API');

const cardAddesState = {
    card: {
        isAdded: true,
        data: fakeCardData,
    },
};

describe('ProfileForm', () => {
    test('renders CreditCard if card was added', () => {
        const card = fakeCardData;

        render(<ProfileForm />, cardAddesState);

        expect(screen.getByTestId('CreditCard')).toBeVisible();
    });

    test('doesnt render CreditCard if card was not added', () => {
        render(<ProfileForm />);

        expect(screen.queryByTestId('CreditCard')).not.toBeInTheDocument();
    });

    test('calls addCard API method on submit and renders added card', async () => {
        const spy = jest.spyOn(API, 'addCard');
        const card = fakeCardData;
        const token = 'token';
        render(<ProfileForm />, { auth: { token: token } });
        const [
            cardNameInput,
            cardNumberInput,
            expiryDateInput,
            cvcInput,
        ] = screen.getAllByRole('textbox');
        const sendButton = screen.getByText('Сохранить');

        userEvent.type(cardNameInput, card.cardName);
        userEvent.type(cardNumberInput, card.cardNumber);
        userEvent.type(expiryDateInput, card.expiryDate);
        userEvent.type(cvcInput, card.cvc);
        userEvent.click(sendButton);

        await waitFor(() => {
            expect(spy).toHaveBeenCalledWith(
                card.cardNumber,
                card.expiryDate,
                card.cardName,
                card.cvc,
                token
            );
            expect(screen.getByTestId('CreditCard')).toBeVisible();
        });
    });

    test.each([
        [
            '',
            '1111 2222 3333 4444',
            '12/24',
            '123',
            'Введите имя владельца карты',
        ],
        ['VLADIMIR VLADIMIROV', '', '12/24', '123', 'Введите номер карты'],
        [
            'VLADIMIR VLADIMIROV',
            '1111 2222 3333 4444',
            '',
            '123',
            'Введите дату',
        ],
        [
            'VLADIMIR VLADIMIROV',
            '1111 2222 3333 4444',
            '12/24',
            '',
            'Введите cvc',
        ],
    ])(
        'on input: %s, %s, %s, %s shows error: "%s"',
        async (cardName, cardNumber, expiryDate, cvc, error) => {
            const spy = jest.spyOn(API, 'addCard');
            render(<ProfileForm />);
            const [
                cardNameInput,
                cardNumberInput,
                expiryDateInput,
                cvcInput,
            ] = screen.getAllByRole('textbox');
            const sendButton = screen.getByText('Сохранить');

            userEvent.type(cardNameInput, cardName);
            userEvent.type(cardNumberInput, cardNumber);
            userEvent.type(expiryDateInput, expiryDate);
            userEvent.type(cvcInput, cvc);
            userEvent.click(sendButton);

            await waitFor(() => {
                expect(spy).not.toHaveBeenCalled();
                expect(screen.getByText(error)).toBeVisible();
            });
        }
    );
});
