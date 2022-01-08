import React from 'react';
import { useFormik, FormikProvider, Field, Form } from 'formik';
import * as yup from 'yup';
import { TextInputField, SubmitButton } from '@sky/piccaso';
import { IPhone } from '@sky/manatee';

export function PhoneContactForm({ onSubmit }: any) {
    const handleSubmit = async (formValues: IPhone) => {
        onSubmit(formValues);
    };

    const validationSchema = yup.object({
        phoneNumber: yup.string().required()
    });

    const formik = useFormik({
        initialValues: {
            phoneNumber: ''
        },
        validationSchema: validationSchema,
        onSubmit: handleSubmit
    });

    return (
        <FormikProvider value={formik}>
            <Form onSubmit={formik.handleSubmit}>
                <Field
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Phone Number"
                    component={TextInputField}
                />

                <SubmitButton id="submit" label="submit">
                    Continue
                </SubmitButton>
            </Form>
        </FormikProvider>
    );
}
