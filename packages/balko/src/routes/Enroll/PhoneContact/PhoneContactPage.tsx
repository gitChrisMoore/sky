import React from 'react';
import { createPhone, IPhone, useAuth } from '@sky/manatee';
import PageTemplate from 'src/components/pages/PageTemplate';
import { PhoneContactForm } from './PhoneContactForm';
import { useNavigate } from 'react-router-dom';

const PhoneContactPage = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const handleSubmit = async (formValues: IPhone) => {
        formValues.user_id = user.id;
        const [, error] = await createPhone(formValues);
        error ? alert(error.message) : navigate('/enroll/addressform');
    };

    return (
        <PageTemplate pageTitle="Phone Contact">
            <PhoneContactForm onSubmit={handleSubmit} />
        </PageTemplate>
    );
};
export default PhoneContactPage;
