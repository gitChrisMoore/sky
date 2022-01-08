import React from 'react';
import { render, screen, waitFor, fireEvent } from 'src/test-utils';
import userEvent from '@testing-library/user-event';
import PersonalDetailsPage from './PersonalDetailsPage';
import * as network from '@sky/manatee';
jest.mock('@sky/manatee');

let MOCK_USER_1 = global.MOCK_DATA_USERS.user1;

describe('PersonFormDetailsPage - Alert', () => {
    const getDataFromServer = jest.spyOn(network, 'createPerson');
    const windowOpenSpy = jest.spyOn(window, 'alert');

    beforeEach(() => {
        getDataFromServer.mockImplementation(() =>
            Promise.resolve([undefined, new Error('Test Error')])
        );
    });

    it('should generate a alert window with message', async () => {
        const handleSubmit = jest.fn();
        render(<PersonalDetailsPage />);

        userEvent.type(screen.getByLabelText(/First name/i), MOCK_USER_1.firstName);
        userEvent.type(screen.getByLabelText(/Last Name/i), MOCK_USER_1.lastName);
        userEvent.type(screen.getByLabelText(/Birthdate/i), MOCK_USER_1.dateofBirth);
        userEvent.type(screen.getByLabelText(/SSN/i), MOCK_USER_1.ssnIdentity);

        await waitFor(async () => {
            let submitForm = screen.getByRole('button', { name: /submit/i });
            fireEvent.submit(submitForm);
            expect(windowOpenSpy).toHaveBeenCalledWith('Test Error');
        });
    });
});
describe('PersonFormDetailsPage', () => {
    const getDataFromServer = jest.spyOn(network, 'createPerson');
    const windowOpenSpy = jest.spyOn(window, 'alert');

    beforeEach(() => {
        getDataFromServer.mockImplementation(() => Promise.resolve([undefined, undefined]));
    });

    it('should generate a alert window with message', async () => {
        const handleSubmit = jest.fn();
        render(<PersonalDetailsPage />);

        userEvent.type(screen.getByLabelText(/First name/i), MOCK_USER_1.firstName);
        userEvent.type(screen.getByLabelText(/Last Name/i), MOCK_USER_1.lastName);
        userEvent.type(screen.getByLabelText(/Birthdate/i), MOCK_USER_1.dateofBirth);
        userEvent.type(screen.getByLabelText(/SSN/i), MOCK_USER_1.ssnIdentity);

        await waitFor(async () => {
            let submitForm = screen.getByRole('button', { name: /submit/i });
            fireEvent.submit(submitForm);
            expect(windowOpenSpy).not.toHaveBeenCalled();
        });
    });
});
