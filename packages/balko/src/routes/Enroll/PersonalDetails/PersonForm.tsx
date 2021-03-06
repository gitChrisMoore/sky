import React from 'react';
import { useFormik, FormikProvider, Field, Form } from 'formik';
import * as yup from 'yup';
import { TextInputField, SubmitButton } from '@sky/piccaso';
import { IPerson } from '@sky/manatee';

type ISubmitFormType = { handleSubmit: (formValues: IPerson) => Promise<void> };

export function PersonForm({ handleSubmit }: ISubmitFormType) {
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
        <FormikProvider value={formik}>
            <Form onSubmit={formik.handleSubmit}>
                <Field
                    id="firstName"
                    name="firstName"
                    label="First name"
                    component={TextInputField}
                />
                <Field id="lastName" name="lastName" label="Last name" component={TextInputField} />
                <Field
                    id="dateofBirth"
                    name="dateofBirth"
                    label="Birthdate"
                    component={TextInputField}
                />
                <Field id="ssnIdentity" name="ssnIdentity" label="SSN" component={TextInputField} />

                <SubmitButton id="submit" label="submit">
                    Continue
                </SubmitButton>
            </Form>
        </FormikProvider>
    );
}
