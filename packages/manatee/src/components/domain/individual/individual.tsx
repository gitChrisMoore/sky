import { IIndividual } from '../../../interfaces/individual.interface';
import { supabase } from '../../data/supabase';
import { toApiIndividual, toUiIndividual } from './individualAdapter';

export const createIndividual = async (
    individual: IIndividual
): Promise<[IIndividual?, Error?]> => {
    let error = undefined;
    const { data, error: APIerror } = await supabase
        .from('individuals')
        .insert(toApiIndividual(individual))
        .single();
    if (APIerror) {
        error = new Error(APIerror.message);
    }

    return [toUiIndividual(data), error];
};

export const getIndividual = async (): Promise<[IIndividual?, Error?]> => {
    let error = undefined;
    const { data, error: APIerror } = await supabase
        .from('individuals')
        .select('*')
        .limit(1)
        .single();
    if (APIerror) {
        error = new Error(APIerror.message);
    }

    return [toUiIndividual(data), error];
};
