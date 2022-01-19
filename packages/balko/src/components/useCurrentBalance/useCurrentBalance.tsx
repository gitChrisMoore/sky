import { useEffect, useState } from 'react';
import { getAccounts, getCurrentBalanceByID } from '@sky/manatee';

const useCurrentBalance = () => {
    const [currentBalance, setCurrentBalance] = useState(0.0);

    const handleGetCurrentBalance = async () => {
        const [accounts] = await getAccounts();
        if (accounts && accounts[0] && accounts[0].id) {
            const [balance] = await getCurrentBalanceByID(accounts[0].id);
            if (balance) setCurrentBalance(balance.currentBalance);
        }
    };

    useEffect(() => {
        handleGetCurrentBalance();
    }, []);

    return currentBalance;
};

export default useCurrentBalance;
