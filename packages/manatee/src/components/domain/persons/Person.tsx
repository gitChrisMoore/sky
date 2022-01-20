import { IPerson } from '../../../interfaces/person.interface';
import { supabase } from '../../data/supabase';
import { toApiPerson, toUiPerson } from './PersonAdapter';

const TBL_NAME = 'persons';

export const createPerson = async (person: IPerson): Promise<[IPerson?, Error?]> => {
    let error = undefined;
    const { data, error: APIerror } = await supabase
        .from(TBL_NAME)
        .insert(toApiPerson(person))
        .single();
    if (APIerror) {
        error = new Error(APIerror.message);
    }

    return [toUiPerson(data), error];
};

export const getMostRecentPerson = async (): Promise<[IPerson?, Error?]> => {
    let error = undefined;
    const { data, error: APIerror } = await supabase
        .from(TBL_NAME)
        .select()
        .order('id', { ascending: false })
        .limit(1)
        .single();
    if (APIerror) {
        error = new Error(APIerror.message);
    }

    return [toUiPerson(data), error];
};

export const getPersonByID = async (persons_id: number): Promise<[IPerson?, Error?]> => {
    let error = undefined;

    const { data, error: APIerror } = await supabase
        .from(TBL_NAME)
        .select('*')
        .match({ id: persons_id })
        .single();
    if (APIerror) {
        error = new Error(APIerror.message);
    }

    return [toUiPerson(data), error];
};
