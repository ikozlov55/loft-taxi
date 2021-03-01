import React from 'react';
import { Provider } from 'react-redux';
import { render as originalRender } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import configureStore from '../redux/create';

function render(ui, initialState = {}) {
    const withStoreWrapper = (props) => {
        return (
            <MemoryRouter>
                <Provider store={configureStore(initialState)}>
                    {props.children}
                </Provider>
            </MemoryRouter>
        );
    };

    return originalRender(ui, {
        wrapper: withStoreWrapper,
    });
}

export { render };
