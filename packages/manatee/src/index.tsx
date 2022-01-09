// Components
import { StateDictionary } from './components/StateDictionary';
import { createAddress, getMostRecentAddress } from './components/domain/addresses/Address';
import { createIndividual, getIndividual } from './components/domain/individual/individual';
import { createPerson, getMostRecentPerson } from './components/domain/persons/Person';
import { createPhone, getMostRecentPhone } from './components/domain/phones/Phone';
// Contexts
import { AuthProvider, useAuth } from './components/contexts/Auth';
// Interfaces
import { IAddress } from './interfaces/address.interface';
import { IIndividual } from './interfaces/individual.interface';
import { IPerson } from './interfaces/person.interface';
import { IPhone } from './interfaces/phone.interface';

export {
    AuthProvider,
    useAuth,
    createAddress,
    getMostRecentAddress,
    StateDictionary,
    createPerson,
    getMostRecentPerson,
    createPhone,
    getMostRecentPhone,
    createIndividual,
    getIndividual
};
export type { IPerson, IAddress, IPhone, IIndividual };
