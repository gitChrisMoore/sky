import React from 'react';
import AppTemplate from 'src/components/pages/AppTemplate';
import AccountCardWidget from 'src/components/AccountCardWidget/AccountCardWidget';
import AddFundsWidget from 'src/components/AddFundsWidget/AddFundsWidget';
import TransactionListWidget from 'src/components/TransactionListWidget/TransactionListWidget';

const Account = () => {
    const title = 'Account';

    return (
        <AppTemplate pageTitle={title}>
            {''}

            <AccountCardWidget />
            <AddFundsWidget />
            <TransactionListWidget />
        </AppTemplate>
    );
};

export default Account;
