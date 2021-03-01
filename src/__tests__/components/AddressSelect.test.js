import React from 'react';
import AddressSelect from '../../main/order/address_select/AddressSelect';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('AddressSelect', () => {
    const addressList = ['Эрмитаж', 'Кинотеатр Аврора', 'Мариинский театр'];

    test('renders correctly with given props', () => {
        const imgPath = 'some/img/path/file.png';
        const labelText = 'Выберите адрес';

        render(
            <AddressSelect
                id='test:id'
                labelText={labelText}
                icon={imgPath}
                value=''
            />
        );

        expect(screen.getByText(labelText)).toBeVisible();
        expect(screen.getByTestId('AddressSelect:start-img')).toHaveAttribute(
            'src',
            imgPath
        );
    });

    test('shows list of given addresses on click', async () => {
        render(
            <AddressSelect id='test:id' value='' addressList={addressList} />
        );

        userEvent.click(screen.getByRole('button'));

        await waitFor(() => {
            for (let address of addressList) {
                expect(screen.getByText(address)).toBeVisible();
            }
        });
    });

    test('fires onChange callback on address select', () => {
        const onChange = jest.fn();
        render(
            <AddressSelect
                onChange={onChange}
                id='test'
                value=''
                addressList={addressList}
            />
        );

        userEvent.click(screen.getByRole('button'));
        userEvent.click(screen.getByText(addressList[1]));

        expect(onChange).toHaveBeenCalled();
    });

    test('fires onCrossClick callback on end adornment click', () => {
        const onCrossClick = jest.fn();
        render(
            <AddressSelect onCrossClick={onCrossClick} id='test' value='' />
        );

        userEvent.click(screen.getByTestId('AddressSelect:end-img'));

        expect(onCrossClick).toHaveBeenCalled();
    });
});
