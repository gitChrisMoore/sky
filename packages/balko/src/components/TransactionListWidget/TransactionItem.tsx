import { ITransaction } from '@sky/manatee';
import React from 'react';
import moment from 'moment';

function TransactionItem(transaction: ITransaction) {
    // const { item } = props;
    // console.log('props', item.id);

    const leftRowSpanBox = 'D';
    const firstLineText = '$' + transaction.amount;
    const secondLineText = 'Transaction description ....';
    const rightRowSpanBox = moment(transaction.effectiveDate).format('ll');
    return (
        <div
            className="grid grid-cols-12 px-2 py-1 \
                        hover:bg-slate-100 hover:border-gray-600 hover:text-gray-800">
            <div className="row-span-2 col-span-2 flex items-center justify-center">
                {/* Deposit Icon */}
                <div
                    className="relative w-3 h-3 bg-slate-400 rounded-full flex /
                                m-auto justify-center items-center text-center p-4 /
                                text-white">
                    {leftRowSpanBox}
                </div>
            </div>
            <div
                className="col-span-8  \
                            text-slate-900 font-normal text-md">
                {firstLineText}
            </div>
            <div
                className="row-span-2  col-span-2 \
                            text-center m-auto text-xs font-light">
                {''}
                {rightRowSpanBox}
            </div>
            <div
                className="col-span-8  \
                            text-slate-600 text-xs font-light">
                {''}
                {secondLineText}
            </div>
        </div>
    );
}

export default TransactionItem;
