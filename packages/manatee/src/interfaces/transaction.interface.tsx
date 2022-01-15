export type ITransaction = {
    id?: string;
    amount: number;
    stateDescription: string;
    type: string;
    createdBy: string;
    user_id: string;
    individuals_id: string;
    accounts_id: string;
    accountProducts_id: string;
    balanceDelta: string;
    processed: boolean;
    status: string;
};
