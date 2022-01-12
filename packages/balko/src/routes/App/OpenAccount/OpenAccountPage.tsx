import React from 'react';
import NavTemplate from 'src/components/pages/NavTemplate';
import { useNavigate } from 'react-router-dom';
import { createAccount, getIndividual } from '@sky/manatee';
import { OpenAccountForm } from './OpenAccountForm';
import { IAccountForm } from './OpenAccountForm.interface';

const OpenAccountPage = () => {
    const navigate = useNavigate();

    const handleSubmit = async (formValues: IAccountForm) => {
        console.log('OpenAccountPage', formValues);
        const [individual] = await getIndividual();
        if (individual && individual.id && formValues && formValues.accountProduct) {
            const accountRequest = {
                user_id: individual.user_id,
                individuals_id: individual.id,
                accountProducts_id: formValues.accountProduct,
                active: true,
                startDate: new Date('2020-02-02')
            };

            console.log('all exist', accountRequest);

            const [, error] = await createAccount(accountRequest);
            error ? alert(error.message) : navigate('/app/dashboard');
        }
    };

    return (
        <>
            <NavTemplate />
            <div className="text-2xl mx-auto font-semibold leading-normal bg-slate-100 mt-0 pl-6 pb-2  text-slate-800">
                {'Open Account'}
            </div>
            <div className="mx-auto pt-3 px-4 max-w-md justify-center ">
                {/*  */}
                {'Open ACcount'}
            </div>
            <div className="mx-auto pt-3 px-4 max-w-md justify-center ">
                <OpenAccountForm handleSubmit={handleSubmit} />
            </div>
        </>
    );
};

export default OpenAccountPage;
