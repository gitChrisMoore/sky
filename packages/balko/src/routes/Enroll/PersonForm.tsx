import React from 'react';
import { useFormik, FormikProvider, Field, Form } from 'formik';
import * as yup from 'yup';
import { IPerson } from '@sky/manatee';
import { TextInputField, SubmitButton } from '@sky/piccaso';
import PageTemplate from 'src/components/pages/PageTemplate';

export function PersonForm() {
    const handleSubmit = async (formValues: IPerson) => {
        console.log('formValues', formValues);
    };

    const validationSchema = yup.object({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        dateofBirth: yup.string().required(),
        ssnIdentity: yup.string().required()
    });

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            dateofBirth: '',
            ssnIdentity: ''
        },
        validationSchema: validationSchema,
        onSubmit: handleSubmit
    });

    return (
        <PageTemplate pageTitle="Personal">
            <FormikProvider value={formik}>
                <Form onSubmit={formik.handleSubmit}>
                    <Field
                        id="firstName"
                        name="firstName"
                        label="First name"
                        component={TextInputField}
                    />
                    <Field
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        component={TextInputField}
                    />
                    <Field
                        id="dateofBirth"
                        name="dateofBirth"
                        label="Birthdate"
                        component={TextInputField}
                    />
                    <Field
                        id="ssnIdentity"
                        name="ssnIdentity"
                        label="SSN"
                        component={TextInputField}
                    />

                    <SubmitButton id="submit" label="submit">
                        Continue
                    </SubmitButton>
                </Form>
            </FormikProvider>
        </PageTemplate>
    );
}
