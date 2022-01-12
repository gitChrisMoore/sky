import { IAccountProduct } from '../../../interfaces/accountProduct.interface';
import { supabase } from '../../data/supabase';
import { toApiAccountProduct, toUiAccountProduct } from './AccountProductAdapter';

export const createAccountProduct = async (
    accountproduct: IAccountProduct
): Promise<[IAccountProduct?, Error?]> => {
    // Placeholder for API call
    let error = undefined;
    const { data, error: APIerror } = await supabase
        .from('accountproductes')
        .insert(toApiAccountProduct(accountproduct))
        .single();
    if (APIerror) {
        error = new Error(APIerror.message);
    }

    return [toUiAccountProduct(data), error];
};

export const getAccountProducts = async (): Promise<[IAccountProduct[]?, Error?]> => {
    let accountProducts = undefined;
    let error = undefined;
    const { data, error: APIerror } = await supabase.from('account_products').select('*');
    if (APIerror) {
        error = new Error(APIerror.message);
    }
    if (data) {
        accountProducts = data.map((accountProduct) => {
            return toUiAccountProduct(accountProduct);
        });
    }
    return [accountProducts, error];
};
