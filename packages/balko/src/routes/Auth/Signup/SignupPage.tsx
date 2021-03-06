import React from 'react';
import PageTemplate from '../../../components/pages/PageTemplate';
import { SignupForm } from './SignupForm';
import { useAuth } from '@sky/manatee';
import { useNavigate } from 'react-router-dom';

interface SignupPageValues {
    email: string;
    password: string;
}

const SignupPage = () => {
    const navigate = useNavigate();
    const { signUp } = useAuth();

    const handleSubmit = async (formValues: SignupPageValues) => {
        const { error } = await signUp(formValues);
        error ? alert(error.message) : navigate('/enroll/personform');
        // console.log('handle Submit', formValues);
    };

    return (
        <PageTemplate>
            <div className="py-8 px-4 rounded-2xl shadow-xl ">
                {/* Custom Header */}
                <h2 className="text-2xl mt-4 font-normal leading-normal mb-8 text-slate-800">
                    Sign up
                </h2>
                <SignupForm handleSubmit={handleSubmit} />
            </div>
        </PageTemplate>
    );
};

export default SignupPage;
