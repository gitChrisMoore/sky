import { ICurrentBalance } from '../../../interfaces/currentBalance.interface';
import { supabase } from '../../data/supabase';
import { toUiCurrentBalance } from './CurrentBalanceAdapter';

const TBL_NAME = 'dev_current_balance';

export const getCurrentBalanceByID = async (
    accounts_id: string
): Promise<[ICurrentBalance?, Error?]> => {
    let error = undefined;
    const { data, error: APIerror } = await supabase
        .from(TBL_NAME)
        .select('*')
        .match({ accounts_id: accounts_id })
        .single();
    if (APIerror) {
        error = new Error(APIerror.message);
    }

    return [toUiCurrentBalance(data), error];
};
