import React from 'react';
import { render } from 'src/test-utils';
import OpenAccountPage from './OpenAccountPage';

let MOCK_USER_1 = global.MOCK_DATA_USERS.user1;

describe('OpenAccount - Alert', () => {
    it('should generate a alert window with message', async () => {
        render(<OpenAccountPage />);
    });
});
