import { IPhone } from '../../../interfaces/phone.interface';

export const createPhone = async (person: IPhone): Promise<[IPhone?, Error?]> => {
    // Placeholder for API call
    const response = person;
    const error = undefined;
    return [response, error];
};
