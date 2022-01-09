import { IAddress } from '../../../interfaces/address.interface';
import { supabase } from '../../data/supabase';
import { toApiAddress, toUiAddress } from './AddressAdapter';

export const createAddress = async (address: IAddress): Promise<[IAddress?, Error?]> => {
    // Placeholder for API call
    let error = undefined;
    const { data, error: APIerror } = await supabase
        .from('addresses')
        .insert(toApiAddress(address))
        .single();
    if (APIerror) {
        error = new Error(APIerror.message);
    }

    return [toUiAddress(data), error];
};

export const getMostRecentAddress = async (): Promise<[IAddress?, Error?]> => {
    let error = undefined;
    const { data, error: APIerror } = await supabase
        .from('addresses')
        .select()
        .order('id', { ascending: false })
        .limit(1)
        .single();
    if (APIerror) {
        error = new Error(APIerror.message);
    }

    return [toUiAddress(data), error];
};
