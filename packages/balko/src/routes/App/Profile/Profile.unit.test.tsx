import React from 'react';
import { render } from 'src/test-utils';
import Profile from './Profile';

let MOCK_USER_1 = global.MOCK_DATA_USERS.user1;

describe('Profile - Alert', () => {
    it('should generate a alert window with message', async () => {
        render(<Profile />);
    });
});
