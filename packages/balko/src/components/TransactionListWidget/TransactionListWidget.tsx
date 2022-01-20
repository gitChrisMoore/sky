import React from 'react';
import useGetTransactions from '../useGetTransactions/useGetTransactions';
import TransactionItem from './TransactionItem';

const TransactionListWidget = () => {
    const transactions = useGetTransactions();

    return (
        <ul>
            {transactions.map((item, index1) => (
                <li key={index1}>
                    {/* {item.effectiveDate} {item.amount} */}
                    <TransactionItem {...item} />
                </li>
            ))}
        </ul>
    );
};

export default TransactionListWidget;
