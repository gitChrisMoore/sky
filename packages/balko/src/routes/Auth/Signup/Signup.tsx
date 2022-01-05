import React from 'react';
import { useFormik, FormikProvider, Field, Form } from 'formik';
import * as yup from 'yup';
import { TextInputField, SubmitButton } from '@sky/piccaso';
import PageTemplate from '../../../components/pages/PageTemplate';

interface SignupFormValues {
    email: string;
    password: string;
}

export function SignupForm() {
    const handleSubmit = async (formValues: SignupFormValues) => {
        console.log('formValues', formValues);
    };

    const validationSchema = yup.object({
        email: yup.string().required(),
        password: yup.string().required()
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: handleSubmit
    });

    return (
        <PageTemplate>
            <div className="py-8 px-4 rounded-2xl shadow-xl ">
                {/* Custom Header */}
                <h2 className="text-2xl mt-4 font-normal leading-normal mb-8 text-slate-800">
                    Sign up
                </h2>
                <FormikProvider value={formik}>
                    <Form onSubmit={formik.handleSubmit}>
                        <Field
                            id="email"
                            name="email"
                            label="Email address"
                            component={TextInputField}
                        />
                        <Field
                            id="password"
                            name="password"
                            label="Password"
                            component={TextInputField}
                        />
                        <SubmitButton id="submit" label="submit">
                            Login
                        </SubmitButton>
                    </Form>
                </FormikProvider>
            </div>
        </PageTemplate>
    );
}
