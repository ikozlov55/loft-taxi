import React from 'react';
import OrderFormContent from '../../main/order/order_form_content/OrderFormContent';
import { screen } from '@testing-library/react';
import { render } from '../../services/utils';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('OrderFormContent', () => {
    test('renders correctly with given props', () => {
        const title = 'Заполните платежные данные';
        const text =
            'Укажите информацию о банковской карте, чтобы сделать заказ.';
        const buttonText = 'Перейти в профиль';
        const linkTo = '/main/profile';
        render(
            <OrderFormContent
                title={title}
                text={text}
                buttonText={buttonText}
                linkTo={linkTo}
            />
        );

        expect(screen.getByText(title)).toBeVisible();
        expect(screen.getByText(text)).toBeVisible();
        expect(screen.getByText(buttonText)).toBeVisible();
        expect(screen.getByRole('link')).toHaveAttribute('href', linkTo);
    });

    test('fires onButtonClick callback on button click', () => {
        const onButtonClick = jest.fn();
        render(<OrderFormContent onButtonClick={onButtonClick} />);

        userEvent.click(screen.getByRole('button'));

        expect(onButtonClick).toHaveBeenCalled();
    });
});
