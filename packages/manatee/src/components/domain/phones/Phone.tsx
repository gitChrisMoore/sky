import { IPhone } from '../../../interfaces/phone.interface';
import { supabase } from '../../data/supabase';
import { toApiPhone, toUiPhone } from './PhoneAdapter';

export const createPhone = async (phone: IPhone): Promise<[IPhone?, Error?]> => {
    let error = undefined;
    const { data, error: APIerror } = await supabase
        .from('phone_numbers')
        .insert(toApiPhone(phone))
        .single();
    if (APIerror) {
        error = new Error(APIerror.message);
    }

    return [toUiPhone(data), error];
};

export const getMostRecentPhone = async (): Promise<[IPhone?, Error?]> => {
    let error = undefined;
    const { data, error: APIerror } = await supabase
        .from('phone_numbers')
        .select()
        .order('id', { ascending: false })
        .limit(1)
        .single();
    if (APIerror) {
        error = new Error(APIerror.message);
    }

    return [toUiPhone(data), error];
};
