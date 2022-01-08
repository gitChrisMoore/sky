// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
declare global {
    var MOCK_DATA_USERS: any;
}

global.MOCK_DATA_USERS = {
    user1: {
        firstName: 'user1_first',
        lastName: 'user1_last',
        middleName: 'user1_middle',
        dateofBirth: '1990-10-01',
        gender: 'M',
        phoneNumber: '1231111122',
        email: 'usera@gmail.com',
        password: 'abcd1234',
        address1: '1234 street',
        address2: '56 apartment',
        city: 'NYC',
        state: 'New York',
        postalCode: '100001',
        ssnIdentity: '31254102'
    },
    user2: {
        user_id: '530f0820-f423-44c7-9727-78d6dc9b0d40'
    },
    user3_destructive: {
        firstName: 'user1_first',
        lastName: 'user1_last',
        middleName: 'user1_middle',
        dateofBirth: '1990-10-01',
        gender: 'M',
        phoneNumber: '1231111122',
        email: 'will_be_deleted@gmail.com',
        password: 'abcd1234',
        address1: '1234 street',
        address2: '56 apartment',
        city: 'NYC',
        state: 'NY',
        postalCode: '100001',
        ssnIdentity: '31254102'
    }
};