import React from 'react';
import { IPerson, createPerson } from '@sky/manatee';
import PageTemplate from 'src/components/pages/PageTemplate';
import { PersonForm } from './PersonForm';

const PersonalDetailsPage = () => {
    const handleSubmit = async (formValues: IPerson) => {
        const [, error] = await createPerson(formValues);
        error ? alert(error.message) : console.log('no error');
    };

    return (
        <PageTemplate pageTitle="Personal">
            <PersonForm onSubmit={handleSubmit} />
        </PageTemplate>
    );
};
export default PersonalDetailsPage;
