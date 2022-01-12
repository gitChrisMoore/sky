import React from 'react';
import AppTemplate from 'src/components/pages/AppTemplate';
import AccountCardWidget from 'src/components/AccountCardWidget/AccountCardWidget';
import AddFundsWidget from 'src/components/AddFundsWidget/AddFundsWidget';

const Account = () => {
    const title = 'Account';

    return (
        <AppTemplate pageTitle={title}>
            {''}

            <AccountCardWidget />
            <AddFundsWidget />
        </AppTemplate>
    );
};

export default Account;
