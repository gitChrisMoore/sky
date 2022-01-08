import React from 'react';
import { render, screen, waitFor, fireEvent } from 'src/test-utils';
import userEvent from '@testing-library/user-event';
import SignupPage from './SignupPage';
// jest.mock('@sky/manatee', () => {
//     const original = jest.requireActual('@sky/manatee'); // Step 2.
//     return {
//         ...original,
//         createAddress: jest.fn()
//     };
// });
// const mockedCreateAddress = createAddress as jest.Mock<any>;

let MOCK_USER_1 = global.MOCK_DATA_USERS.user1;

describe('SignupPage - Alert', () => {
    // const windowOpenSpy = jest.spyOn(window, 'alert');

    it('should generate a alert window with message', async () => {
        // mockedCreateAddress.mockImplementation(() =>
        //     Promise.resolve([undefined, new Error('Test Error')])
        // );

        render(<SignupPage />);

        userEvent.type(screen.getByLabelText(/Email add/i), MOCK_USER_1.email);
        userEvent.type(screen.getByLabelText(/Password/i), MOCK_USER_1.password);

        await waitFor(async () => {
            let submitForm = screen.getByRole('button', { name: /submit/i });
            fireEvent.submit(submitForm);
            // screen.debug();
            // expect(windowOpenSpy).toHaveBeenCalledWith('Test Error');
        });
        // console.log(screen.getByLabelText(/State/i));
    });
});
describe('SignupPage', () => {
    // const windowOpenSpy = jest.spyOn(window, 'alert');

    it('should generate a alert window with message', async () => {
        // mockedCreateAddress.mockImplementation(() =>
        //     //
        //     Promise.resolve([undefined, undefined])
        // );

        render(<SignupPage />);

        userEvent.type(screen.getByLabelText(/Email add/i), MOCK_USER_1.email);
        userEvent.type(screen.getByLabelText(/Password/i), MOCK_USER_1.password);

        await waitFor(async () => {
            let submitForm = screen.getByRole('button', { name: /submit/i });
            fireEvent.submit(submitForm);
            // expect(windowOpenSpy).not.toHaveBeenCalled();
        });
    });
});
