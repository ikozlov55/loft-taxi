import { takeLatest } from 'redux-saga/effects';
import { runSaga } from 'redux-saga';
import {
    registraionOperations as operations,
    registraionTypes as types,
} from '../../redux/modules/registration';
import * as mockData from '../../services/mockData';
import API from '../../services/API';
import history from '../../history';

jest.mock('../../services/API');

async function runSagaRegistraion(email, name, password) {
    let dispatchedAction = null;
    const saga = runSaga(
        {
            dispatch: (action) => (dispatchedAction = action),
        },
        operations.registration,
        operations.register(email, name, password)
    );
    await saga.toPromise();

    return dispatchedAction;
}

describe('registrationSaga', () => {
    test('should wait for latest REGISTRATION and REGISTRATION_COMPLETED actions', () => {
        const saga = operations.registrationSaga();

        expect(saga.next().value).toEqual(
            takeLatest(types.REGISTRATION, operations.registration)
        );
        expect(saga.next().value).toEqual(
            takeLatest(
                types.REGISTRATION_COMPLETED,
                operations.redirectToLoginPage
            )
        );
    });

    test('should be done for next iteration', () => {
        const saga = operations.registrationSaga();
        saga.next();
        saga.next();

        expect(saga.next().done).toBeTruthy();
    });
});

describe('registration', () => {
    test('calls register API method and dispatches REGISTRATION_FAILED action on error', async () => {
        const spy = jest.spyOn(API, 'register');
        const email = 'fail@mail.ru';
        const name = 'Владимир Владимиров';
        const password = '123456';
        let dispatchedAction = await runSagaRegistraion(email, name, password);

        expect(spy).toHaveBeenCalledWith(email, name, password);
        expect(dispatchedAction.type).toEqual(types.REGISTRATION_FAILED);
        expect(dispatchedAction.payload).toEqual({
            error: mockData.registrationError,
        });
    });

    test('calls register API method and dispatches REGISTRATION_COMPLETED action on success', async () => {
        const spy = jest.spyOn(API, 'register');
        const email = 'test@mail.ru';
        const name = 'Владимир Владимиров';
        const password = '123456';
        let dispatchedAction = await runSagaRegistraion(email, name, password);

        expect(spy).toHaveBeenCalledWith(email, name, password);
        expect(dispatchedAction.type).toEqual(types.REGISTRATION_COMPLETED);
    });
});

describe('redirectToLoginPage', () => {
    test('pushes to /login route to history object', async () => {
        const spy = jest.spyOn(history, 'push');

        await runSaga({}, operations.redirectToLoginPage);

        expect(spy).toHaveBeenCalledWith('/login');
    });
});
