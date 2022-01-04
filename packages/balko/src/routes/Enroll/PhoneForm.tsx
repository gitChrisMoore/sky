import React from 'react';
import { useFormik, FormikProvider, Field, Form } from 'formik';
import * as yup from 'yup';
import { TextInputField, SubmitButton } from '@sky/piccaso';
import PageTemplate from 'src/components/PageTemplate';

interface PhoneFormValues {
    phoneNumber: string;
}

export function PhoneForm() {
    const handleSubmit = async (formValues: PhoneFormValues) => {
        console.log('formValues', formValues);
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
        <PageTemplate pageTitle="Phone">
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
        </PageTemplate>
    );
}
