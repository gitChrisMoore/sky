import React from 'react';
import { useFormik, FormikProvider, Field, Form } from 'formik';
import * as yup from 'yup';
import { DecimalInputField, SubmitButton } from '@sky/piccaso';

type ISubmitFormType = { handleSubmit: (formValues: { amount: number }) => Promise<void> };

export function AddFundsForm({ handleSubmit }: ISubmitFormType) {
    const validationSchema = yup.object({
        amount: yup.number().required()
    });

    const formik = useFormik({
        initialValues: {
            amount: 0.0
        },
        validationSchema: validationSchema,
        onSubmit: handleSubmit
    });

    return (
        <FormikProvider value={formik}>
            <Form onSubmit={formik.handleSubmit}>
                <Field id="amount" name="amount" label="Amount" component={DecimalInputField} />

                <SubmitButton id="submit" label="submit">
                    Add Funds
                </SubmitButton>
            </Form>
        </FormikProvider>
    );
}
