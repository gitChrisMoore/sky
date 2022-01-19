import { ITransaction } from '../../../interfaces/transaction.interface';
import { supabase } from '../../data/supabase';
import { toApiTransaction, toUiTransaction } from './TransactionAdapter';

const TBL_NAME = 'dev_transactions';

export const createTransaction = async (
    newTransaction: ITransaction
): Promise<[ITransaction?, Error?]> => {
    let error = undefined;
    const { data, error: APIerror } = await supabase
        .from(TBL_NAME)
        .insert(toApiTransaction(newTransaction))
        .single();
    if (APIerror) {
        error = new Error(APIerror.message);
    }

    return [toUiTransaction(data), error];
};
