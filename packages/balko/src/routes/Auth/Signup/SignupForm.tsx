import React from 'react';
import { useFormik, FormikProvider, Field, Form } from 'formik';
import * as yup from 'yup';
import { TextInputField, SubmitButton } from '@sky/piccaso';

interface SignupPageValues {
    email: string;
    password: string;
}

export function SignupForm({ onSubmit }: any) {
    const handleSubmit = async (formValues: SignupPageValues) => {
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
        <FormikProvider value={formik}>
            <Form onSubmit={formik.handleSubmit}>
                <Field id="email" name="email" label="Email address" component={TextInputField} />
                <Field id="password" name="password" label="Password" component={TextInputField} />
                <SubmitButton id="submit" label="submit">
                    Login
                </SubmitButton>
            </Form>
        </FormikProvider>
    );
}
