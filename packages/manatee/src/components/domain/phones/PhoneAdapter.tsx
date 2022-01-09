import { IPhone } from '../../../interfaces/phone.interface';
import { IPhoneAPI } from '../../../interfaces/phoneAPI.interface';

export const toApiPhone = (uiPhone: IPhone) => {
    const apiPhone = {
        id: uiPhone?.id,
        user_id: uiPhone.user_id,
        phone_number: uiPhone.phoneNumber
    };
    return apiPhone;
};

export const toUiPhone = (apiPhone: IPhoneAPI) => {
    const uiPhone = {
        id: apiPhone.id,
        user_id: apiPhone.user_id,
        phoneNumber: apiPhone.phone_number
    };
    return uiPhone;
};
