import { IAccountProduct } from '../../../interfaces/accountProduct.interface';
import { IAccountProductAPI } from '../../../interfaces/accountProductAPI.interface';

export const toApiAccountProduct = (uiAccountProduct: IAccountProduct) => {
    const apiAccountProduct = {
        id: uiAccountProduct.id,
        user_id: uiAccountProduct.user_id,
        token: uiAccountProduct.token,
        updated_at: uiAccountProduct.updatedAt,
        inserted_at: uiAccountProduct.insertedAt,
        active: uiAccountProduct.active,
        config: uiAccountProduct.config,
        start_date: uiAccountProduct.startDate,
        end_date: uiAccountProduct.endDate,
        name: uiAccountProduct.name
    };
    return apiAccountProduct;
};

export const toUiAccountProduct = (apiAccountProduct: IAccountProductAPI) => {
    const uiAccountProduct = {
        id: apiAccountProduct.id,
        user_id: apiAccountProduct.user_id,
        token: apiAccountProduct.token,
        updatedAt: apiAccountProduct.updated_at,
        insertedAt: apiAccountProduct.inserted_at,
        active: apiAccountProduct.active,
        config: apiAccountProduct.config,
        startDate: apiAccountProduct.start_date,
        endDate: apiAccountProduct.end_date,
        name: apiAccountProduct.name
    };
    return uiAccountProduct;
};
