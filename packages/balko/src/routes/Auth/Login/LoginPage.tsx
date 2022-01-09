import React from 'react';
import PageTemplate from '../../../components/pages/PageTemplate';
import { LoginForm } from './LoginForm';
import { useAuth } from '@sky/manatee';
import { useNavigate } from 'react-router-dom';

interface LoginPageValues {
    user_id?: string;
    email: string;
    password: string;
}

const LoginPage = () => {
    const navigate = useNavigate();
    const { signIn } = useAuth();

    const handleSubmit = async (formValues: LoginPageValues) => {
        const { error } = await signIn(formValues);
        error ? alert(error.message) : navigate('/enroll/personform');
        // console.log('handle Submit', formValues);
    };

    return (
        <PageTemplate>
            <div className="py-8 px-4 rounded-2xl shadow-xl ">
                {/* Custom Header */}
                <h2 className="text-2xl mt-4 font-normal leading-normal mb-8 text-slate-800">
                    Welcome back!
                </h2>
                <LoginForm onSubmit={handleSubmit} />
            </div>
        </PageTemplate>
    );
};

export default LoginPage;
