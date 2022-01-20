import React from 'react';
import AppTemplate from 'src/components/pages/AppTemplate';
import AddFundsWidget from 'src/components/AddFundsWidget/AddFundsWidget';
import TransactionListWidget from 'src/components/TransactionListWidget/TransactionListWidget';

const Sale = () => {
    const title = 'Sale';

    return (
        <AppTemplate pageTitle={title}>
            {''}

            <AddFundsWidget />
            <TransactionListWidget />
        </AppTemplate>
    );
};

export default Sale;
