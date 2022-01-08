import React from 'react';
import { render } from 'src/test-utils';
import Scan from './Scan';

let MOCK_USER_1 = global.MOCK_DATA_USERS.user1;

describe('Scan - Alert', () => {
    it('should generate a alert window with message', async () => {
        render(<Scan />);
    });
});
