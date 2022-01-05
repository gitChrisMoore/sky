import React from 'react';
import { useFormik, FormikProvider, Field, Form } from 'formik';
import * as yup from 'yup';
import { TextInputField, SubmitButton } from '@sky/piccaso';
import PageTemplate from 'src/components/PageTemplate';

interface LoginFormValues {
    email: string;
    password: string;
}

export function LoginForm() {
    const handleSubmit = async (formValues: LoginFormValues) => {
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
        <PageTemplate pageTitle="Welcome back">
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
        </PageTemplate>
    );
}
