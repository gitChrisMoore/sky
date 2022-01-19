import { ICurrentBalance } from '../../../interfaces/currentBalance.interface';
import { ICurrentBalanceAPI } from '../../../interfaces/currentBalanceAPI.interface';

export const toApiCurrentBalance = (uiCurrentBalance: ICurrentBalance) => {
    const apiCurrentBalance = {
        accounts_id: uiCurrentBalance.accounts_id,
        current_balance: uiCurrentBalance.currentBalance
    };
    return apiCurrentBalance;
};

export const toUiCurrentBalance = (apiCurrentBalance: ICurrentBalanceAPI) => {
    const uiCurrentBalance = {
        accounts_id: apiCurrentBalance.accounts_id,
        currentBalance: apiCurrentBalance.current_balance
    };
    return uiCurrentBalance;
};
