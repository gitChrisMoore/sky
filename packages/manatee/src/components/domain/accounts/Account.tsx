import { IAccount } from '../../../interfaces/account.interface';
import { supabase } from '../../data/supabase';
import { toApiAccount, toUiAccount } from './AccountAdapter';

export const createAccount = async (account: IAccount): Promise<[IAccount?, Error?]> => {
    // Placeholder for API call
    let error = undefined;
    const { data, error: APIerror } = await supabase
        .from('accounts')
        .insert(toApiAccount(account))
        .single();
    if (APIerror) {
        error = new Error(APIerror.message);
    }

    return [toUiAccount(data), error];
};

export const getAccounts = async (): Promise<[IAccount[]?, Error?]> => {
    let accounts = undefined;
    let error = undefined;
    const { data, error: APIerror } = await supabase.from('accounts').select('*');
    if (APIerror) {
        error = new Error(APIerror.message);
    }
    if (data) {
        accounts = data.map((account) => {
            return toUiAccount(account);
        });
    }

    return [accounts, error];
};
