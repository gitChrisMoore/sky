import { IIndividual } from '../../../interfaces/individual.interface';
import { IIndividualAPI } from '../../../interfaces/individualAPI.interface';

export const toApiIndividual = (uiIndividual: IIndividual) => {
    const apiIndividual = {
        id: uiIndividual.id,
        user_id: uiIndividual.user_id,
        persons_id: uiIndividual.persons_id,
        addresses_id: uiIndividual.addresses_id,
        phone_numbers_id: uiIndividual.phoneNumbers_id
    };
    return apiIndividual;
};

export const toUiIndividual = (apiIndividual: IIndividualAPI) => {
    const uiIndividual = {
        id: apiIndividual.id,
        user_id: apiIndividual.user_id,
        persons_id: apiIndividual.persons_id,
        addresses_id: apiIndividual.addresses_id,
        phoneNumbers_id: apiIndividual.phone_numbers_id
    };
    return uiIndividual;
};
