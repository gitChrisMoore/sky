import React from 'react';
import { CreditCard } from '@sky/piccaso';
import useCurrentBalance from '../useCurrentBalance/useCurrentBalance';

const AccountCardWidget = () => {
    const currentBalance = useCurrentBalance();
    return (
        <>
            {''}
            <CreditCard amount={currentBalance} />
        </>
    );
};

export default AccountCardWidget;
