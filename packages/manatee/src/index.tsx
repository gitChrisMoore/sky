// Components
import { StateDictionary } from './components/StateDictionary';
import { createAccount, getAccounts } from './components/domain/accounts/Account';
import { createAddress, getMostRecentAddress } from './components/domain/addresses/Address';
import { createIndividual, getIndividual } from './components/domain/individual/individual';
import {
    createPerson,
    getMostRecentPerson,
    getPersonByID
} from './components/domain/persons/Person';
import { createPhone, getMostRecentPhone } from './components/domain/phones/Phone';
import {
    createAccountProduct,
    getAccountProducts
} from './components/domain/accountProducts/AccountProduct';
// Contexts
import { AuthProvider, useAuth } from './components/contexts/Auth';
// Interfaces

import { IAccount } from './interfaces/account.interface';
import { IAccountProduct } from './interfaces/accountProduct.interface';
import { IAddress } from './interfaces/address.interface';
import { IIndividual } from './interfaces/individual.interface';
import { IPerson } from './interfaces/person.interface';
import { IPhone } from './interfaces/phone.interface';
import { ITransaction } from './interfaces/transaction.interface';
import { ICurrentBalance } from './interfaces/currentBalance.interface';
import { ICurrentBalanceAPI } from './interfaces/currentBalanceAPI.interface';
import { getCurrentBalanceByID } from './components/domain/currentBalances/CurrentBalance';
import { createTransaction, getTransactions } from './components/domain/transactions/Transaction';

export {
    AuthProvider,
    useAuth,
    createAddress,
    getMostRecentAddress,
    StateDictionary,
    createPerson,
    getMostRecentPerson,
    getPersonByID,
    createPhone,
    getMostRecentPhone,
    createIndividual,
    getIndividual,
    getAccountProducts,
    createAccountProduct,
    createAccount,
    getAccounts,
    getCurrentBalanceByID,
    createTransaction,
    getTransactions
};
export type {
    IPerson,
    IAddress,
    IPhone,
    IIndividual,
    IAccountProduct,
    IAccount,
    ITransaction,
    ICurrentBalance,
    ICurrentBalanceAPI
};
