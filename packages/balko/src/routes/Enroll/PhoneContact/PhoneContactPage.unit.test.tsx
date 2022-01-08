import React from 'react';
import { render, screen, waitFor, fireEvent } from 'src/test-utils';
import userEvent from '@testing-library/user-event';
import PhoneContactPage from './PhoneContactPage';
import { createPhone } from '@sky/manatee';

jest.mock('@sky/manatee', () => {
    const original = jest.requireActual('@sky/manatee'); // Step 2.
    return {
        ...original,
        createPhone: jest.fn()
    };
});
const mockedCreatePhone = createPhone as jest.Mock<any>;

let MOCK_USER_1 = global.MOCK_DATA_USERS.user1;

describe('PhoneContactPage - Alert', () => {
    const windowOpenSpy = jest.spyOn(window, 'alert');

    it('should generate a alert window with message', async () => {
        mockedCreatePhone.mockImplementation(() =>
            Promise.resolve([undefined, new Error('Test Error')])
        );

        render(<PhoneContactPage />);

        userEvent.type(screen.getByLabelText(/Phone Number/i), MOCK_USER_1.phoneNumber);

        await waitFor(async () => {
            let submitForm = screen.getByRole('button', { name: /submit/i });
            fireEvent.submit(submitForm);
            expect(windowOpenSpy).toHaveBeenCalledWith('Test Error');
        });
    });
});
describe('PhoneContactPage', () => {
    const windowOpenSpy = jest.spyOn(window, 'alert');

    it('should generate a alert window with message', async () => {
        mockedCreatePhone.mockImplementation(() =>
            //
            Promise.resolve([undefined, undefined])
        );
        render(<PhoneContactPage />);

        userEvent.type(screen.getByLabelText(/Phone Number/i), MOCK_USER_1.phoneNumber);

        await waitFor(async () => {
            let submitForm = screen.getByRole('button', { name: /submit/i });
            fireEvent.submit(submitForm);
            expect(windowOpenSpy).not.toHaveBeenCalled();
        });
    });
});
