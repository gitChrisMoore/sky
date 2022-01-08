import React from 'react';
import { IAddress, createAddress } from '@sky/manatee';
import PageTemplate from 'src/components/pages/PageTemplate';
import { PrimaryAddressForm } from './PrimaryAddressForm';

const PrimaryAddressPage = () => {
    const handleSubmit = async (formValues: IAddress) => {
        const [, error] = await createAddress(formValues);
        error ? alert(error.message) : console.log('no error');
    };

    return (
        <PageTemplate pageTitle="Personal">
            <PrimaryAddressForm onSubmit={handleSubmit} />
        </PageTemplate>
    );
};
export default PrimaryAddressPage;
