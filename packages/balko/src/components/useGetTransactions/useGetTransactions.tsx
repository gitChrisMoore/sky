import { useEffect, useState } from 'react';
import { getTransactions } from '@sky/manatee';
import { ITransaction } from '@sky/manatee';

const useGetTransactions = () => {
    const [transactions, setTransactions] = useState<ITransaction[]>([]);

    const handleGetTransactions = async () => {
        const [transactionList] = await getTransactions();
        if (transactionList) {
            setTransactions(transactionList);
        }
    };

    useEffect(() => {
        handleGetTransactions();
    }, []);

    return transactions;
};

export default useGetTransactions;
