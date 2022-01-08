import { IPerson } from '../../../interfaces/person.interface';

export const createPerson = async (person: IPerson): Promise<[IPerson?, Error?]> => {
    // Placeholder for API call
    const response = person;
    const error = undefined;
    return [response, error];
};
