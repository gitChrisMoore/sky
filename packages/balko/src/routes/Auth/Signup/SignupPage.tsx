import React from 'react';
import PageTemplate from '../../../components/pages/PageTemplate';
import { SignupForm } from './SignupForm';

interface SignupPageValues {
    email: string;
    password: string;
}

const SignupPage = () => {
    const handleSubmit = async (formValues: SignupPageValues) => {
        // const [, error] = await createAddress(formValues);
        // error ? alert(error.message) : console.log('no error');
        console.log('handle Submit');
    };

    return (
        <PageTemplate>
            <div className="py-8 px-4 rounded-2xl shadow-xl ">
                {/* Custom Header */}
                <h2 className="text-2xl mt-4 font-normal leading-normal mb-8 text-slate-800">
                    Sign up
                </h2>
                <SignupForm onSubmit={handleSubmit} />
            </div>
        </PageTemplate>
    );
};

export default SignupPage;
