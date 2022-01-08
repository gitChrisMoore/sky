import React from 'react';
import { render, screen, waitFor, fireEvent } from 'src/test-utils';
import userEvent from '@testing-library/user-event';
import PrimaryAddressPage from './PrimaryAddressPage';
import { createAddress } from '@sky/manatee';

jest.mock('@sky/manatee', () => {
    const original = jest.requireActual('@sky/manatee'); // Step 2.
    return {
        ...original,
        createAddress: jest.fn()
    };
});
const mockedCreateAddress = createAddress as jest.Mock<any>;

let MOCK_USER_1 = global.MOCK_DATA_USERS.user1;

describe('PrimaryAddressPage - Alert', () => {
    const windowOpenSpy = jest.spyOn(window, 'alert');

    it('should generate a alert window with message', async () => {
        mockedCreateAddress.mockImplementation(() =>
            Promise.resolve([undefined, new Error('Test Error')])
        );

        render(<PrimaryAddressPage />);

        userEvent.type(screen.getByLabelText(/Address 1/i), MOCK_USER_1.address1);
        userEvent.type(screen.getByLabelText(/City/i), MOCK_USER_1.city);
        userEvent.selectOptions(screen.getByLabelText(/State/i), MOCK_USER_1.state);
        userEvent.type(screen.getByLabelText(/Zip Code/i), MOCK_USER_1.postalCode);
        await waitFor(async () => {
            let submitForm = screen.getByRole('button', { name: /submit/i });
            fireEvent.submit(submitForm);
            // screen.debug();
            expect(windowOpenSpy).toHaveBeenCalledWith('Test Error');
        });
        // console.log(screen.getByLabelText(/State/i));
    });
});
describe('PrimaryAddressPage', () => {
    const windowOpenSpy = jest.spyOn(window, 'alert');

    it('should generate a alert window with message', async () => {
        mockedCreateAddress.mockImplementation(() =>
            //
            Promise.resolve([undefined, undefined])
        );

        render(<PrimaryAddressPage />);

        userEvent.type(screen.getByLabelText(/Address 1/i), MOCK_USER_1.address1);
        userEvent.type(screen.getByLabelText(/City/i), MOCK_USER_1.city);
        userEvent.selectOptions(screen.getByLabelText(/State/i), MOCK_USER_1.state);
        userEvent.type(screen.getByLabelText(/Zip Code/i), MOCK_USER_1.postalCode);

        await waitFor(async () => {
            let submitForm = screen.getByRole('button', { name: /submit/i });
            fireEvent.submit(submitForm);
            expect(windowOpenSpy).not.toHaveBeenCalled();
        });
    });
});
