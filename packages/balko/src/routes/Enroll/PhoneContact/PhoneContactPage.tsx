import React from 'react';
import { createPhone, IPhone } from '@sky/manatee';
import PageTemplate from 'src/components/pages/PageTemplate';
import { PhoneContactForm } from './PhoneContactForm';

const PhoneContactPage = () => {
    const handleSubmit = async (formValues: IPhone) => {
        const [, error] = await createPhone(formValues);
        error ? alert(error.message) : console.log('no error');
    };

    return (
        <PageTemplate pageTitle="Phone Contact">
            <PhoneContactForm onSubmit={handleSubmit} />
        </PageTemplate>
    );
};
export default PhoneContactPage;
