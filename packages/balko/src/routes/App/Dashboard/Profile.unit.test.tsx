import React from 'react';
import { render } from 'src/test-utils';
import Dashboard from './Dashboard';

let MOCK_USER_1 = global.MOCK_DATA_USERS.user1;

describe('Dashboard - Alert', () => {
    it('should generate a alert window with message', async () => {
        render(<Dashboard />);
    });
});
