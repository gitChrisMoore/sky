// Components
import { createAddress } from './components/domain/addresses/Address';
import { StateDictionary } from './components/StateDictionary';
import { createPerson } from './components/domain/persons/Person';
import { createPhone } from './components/domain/phones/Person';
// Interfaces
import { IPerson } from './interfaces/person.interface';
import { IAddress } from './interfaces/address.interface';
import { IPhone } from './interfaces/phone.interface';

export { createAddress, StateDictionary, createPerson, createPhone };
export type { IPerson, IAddress, IPhone };
