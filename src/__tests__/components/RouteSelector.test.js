import React from 'react';
import RouteSelector from '../../main/order/route_selector/RouteSelector';
import {
    screen,
    waitFor,
    waitForElementToBeRemoved,
} from '@testing-library/react';
import { render } from '../../services/utils';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { fakeAddressList } from '../../services/mockData';

jest.mock('../../services/API');

describe('RouteSelector', () => {
    test('fires setSelectedFrom callback on option select', async () => {
        const setSelectedFrom = jest.fn();
        const address = fakeAddressList[0];
        render(
            <RouteSelector
                selectedFrom=''
                selectedTo=''
                setSelectedFrom={setSelectedFrom}
                setSelectedTo={jest.fn()}
            />
        );

        const [fromSelect, _] = screen.getAllByRole('button');
        userEvent.click(fromSelect);

        await waitFor(() => {
            userEvent.click(screen.getByText(address));
            expect(setSelectedFrom).toHaveBeenCalledWith(address);
        });
    });

    test('fires setSelectedTo callback on option select', async () => {
        const setSelectedTo = jest.fn();
        const address = fakeAddressList[1];
        render(
            <RouteSelector
                selectedFrom=''
                selectedTo=''
                setSelectedTo={setSelectedTo}
                setSelectedFrom={jest.fn()}
            />
        );

        const [_, toSelect] = screen.getAllByRole('button');
        userEvent.click(toSelect);

        await waitFor(() => {
            userEvent.click(screen.getByText(address));
            expect(setSelectedTo).toHaveBeenCalledWith(address);
        });
    });

    test('clears selected from address on cross click', async () => {
        const address = fakeAddressList[0];
        render(
            <RouteSelector
                selectedFrom=''
                selectedTo=''
                setSelectedFrom={jest.fn()}
                setSelectedTo={jest.fn()}
            />
        );

        const fromSelect = screen.getAllByRole('button')[0];
        userEvent.click(fromSelect);

        let option = await screen.findByText(address);
        userEvent.click(option);

        const clearFromSelect = screen.getAllByTestId(
            'AddressSelect:end-img'
        )[0];
        userEvent.click(clearFromSelect);

        await waitForElementToBeRemoved(() => screen.getByText(address));
    });

    test('clears selected frtoom address on cross click', async () => {
        const address = fakeAddressList[1];
        render(
            <RouteSelector
                selectedFrom=''
                selectedTo=''
                setSelectedFrom={jest.fn()}
                setSelectedTo={jest.fn()}
            />
        );

        const toSelect = screen.getAllByRole('button')[1];
        userEvent.click(toSelect);

        let option = await screen.findByText(address);
        userEvent.click(option);

        const clearFromSelect = screen.getAllByTestId(
            'AddressSelect:end-img'
        )[1];
        userEvent.click(clearFromSelect);

        await waitForElementToBeRemoved(() => screen.getByText(address));
    });
});

// const [fromSelect, toSelect] = screen.getAllByRole('input');
// const [fromSelect, toSelect] = await screen.getAllByRole('button');
// userEvent.click(fromSelect);
// expect(fromSelect).toHaveValue(fakeAddressList[0]);
// expect(toSelect).toHaveValue(fakeAddressList[1]);
