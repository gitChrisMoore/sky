import React from 'react';
import { IPerson, createPerson, useAuth } from '@sky/manatee';
import PageTemplate from 'src/components/pages/PageTemplate';
import { PersonForm } from './PersonForm';
import { useNavigate } from 'react-router-dom';

const PersonalDetailsPage = () => {
    const navigate = useNavigate();
    const { user } = useAuth();

    const handleSubmit = async (formValues: IPerson) => {
        formValues.user_id = user.id;
        const [, error] = await createPerson(formValues);
        error ? alert(error.message) : navigate('/enroll/phoneform');
    };

    return (
        <PageTemplate pageTitle="Personal">
            <PersonForm onSubmit={handleSubmit} />
        </PageTemplate>
    );
};
export default PersonalDetailsPage;
