export type ITransactionAPI = {
    id?: string;
    amount: number;
    state_description: string;
    type: string;
    created_by: string;
    user_id: string;
    individuals_id: string;
    accounts_id: string;
    account_products_id: string;
    balance_delta: number;
    processed: boolean;
    status: string;
    token?: string;
    effective_date?: Date;
    inserted_at?: Date;
    state_id?: number;
    source?: string;
    config?: string;
};
