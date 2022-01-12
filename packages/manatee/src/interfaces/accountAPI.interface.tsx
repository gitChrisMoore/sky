export type IAccountAPI = {
    id?: string;
    user_id?: string;
    individuals_id?: string;
    account_products_id?: string;
    token?: string;
    updated_at?: Date;
    inserted_at?: Date;
    active?: boolean;
    config?: string;
    start_date?: Date;
    end_date?: Date;
    name?: string;
};
