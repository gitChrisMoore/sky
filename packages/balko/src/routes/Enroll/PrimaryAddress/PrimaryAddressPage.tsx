import React from 'react';
import { IAddress, createAddress, useAuth } from '@sky/manatee';
import PageTemplate from 'src/components/pages/PageTemplate';
import { PrimaryAddressForm } from './PrimaryAddressForm';
import { useNavigate } from 'react-router-dom';

const PrimaryAddressPage = () => {
    const navigate = useNavigate();
    const { user } = useAuth();

    const handleSubmit = async (formValues: IAddress) => {
        formValues.user_id = user.id;
        const [, error] = await createAddress(formValues);
        error ? alert(error.message) : navigate('/app/dashboard');
    };

    return (
        <PageTemplate pageTitle="Primary Address">
            <PrimaryAddressForm onSubmit={handleSubmit} />
        </PageTemplate>
    );
};
export default PrimaryAddressPage;
