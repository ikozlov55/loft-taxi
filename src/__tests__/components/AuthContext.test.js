import React, { useContext, useState } from 'react';
import { AuthContextProvider, AuthContext } from '../../AuthContext';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

const mockLogin = jest.fn();
const email = 'mail@mail.ru';
const password = '123456';

jest.mock('../services/API', () => ({
    login(email, password) {
        return new Promise((resolve, reject) => {
            mockLogin(email, password);
            resolve();
        });
    },
}));

const ChildComponent = () => {
    const context = useContext(AuthContext);
    const [text, setText] = useState('');

    function onLoginClick() {
        context.login(email, password);
        setText('Login clicked!');
    }

    function onLogoutClick() {
        context.logout();
        setText('Logout clicked!');
    }

    return (
        <div>
            <h1>{text}</h1>
            <button data-testid='login-button' onClick={onLoginClick}></button>
            <button
                data-testid='logout-button'
                onClick={onLogoutClick}
            ></button>
        </div>
    );
};

describe('AuthContextProvider component', () => {
    test('renders successfully with its children', () => {
        const ChildComponent = () => {
            return <div>Component</div>;
        };
        render(
            <AuthContextProvider>
                <ChildComponent />
            </AuthContextProvider>
        );
        const innerComponent = screen.getByText('Component');

        expect(innerComponent).toBeInTheDocument();
    });

    test('provides children with context with login method, that calls API.login', async () => {
        render(
            <AuthContextProvider>
                <ChildComponent></ChildComponent>
            </AuthContextProvider>
        );
        const button = screen.getByTestId('login-button');
        userEvent.click(button);

        await waitFor(() => {
            expect(screen.getByText('Login clicked!')).toBeInTheDocument();
        });
        expect(mockLogin).toBeCalledWith(email, password);
    });

    test('provides children with context with logout method', () => {
        render(
            <AuthContextProvider>
                <ChildComponent></ChildComponent>
            </AuthContextProvider>
        );
        const button = screen.getByTestId('logout-button');
        userEvent.click(button);

        expect(screen.getByText('Logout clicked!')).toBeInTheDocument();
    });
});
