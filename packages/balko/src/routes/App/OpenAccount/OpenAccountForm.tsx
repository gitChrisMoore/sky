import React, { useEffect, useState } from 'react';
import { useFormik, FormikProvider, Field, Form } from 'formik';
import * as yup from 'yup';
import { SubmitButton, SelectInputField } from '@sky/piccaso';
import { getAccountProducts } from '@sky/manatee';
import { IAccountProduct } from '@sky/manatee';
import { IAccountForm } from './OpenAccountForm.interface';

type ISubmitFormType = { handleSubmit: (formValues: IAccountForm) => Promise<void> };

export function OpenAccountForm({ handleSubmit }: ISubmitFormType) {
    const [accountProductOptions, setAccountProductOptions] = useState([] as IAccountProduct[]);

    const handleAccountProductOptions = async () => {
        const [res] = await getAccountProducts();
        if (res) setAccountProductOptions(res);
    };

    const validationSchema = yup.object({
        accountProduct: yup.string().required()
    });

    const formik = useFormik({
        initialValues: {
            accountProduct: ''
        },
        validationSchema: validationSchema,
        onSubmit: handleSubmit
    });

    useEffect(() => {
        handleAccountProductOptions();
    }, []);

    return (
        <FormikProvider value={formik}>
            <Form onSubmit={formik.handleSubmit}>
                <Field
                    id="accountProduct"
                    name="accountProduct"
                    label="Account Product Type"
                    component={SelectInputField}
                    option_list={accountProductOptions}
                />

                <div className="mt-2">
                    <SubmitButton id="submit" label="submit">
                        Continue
                    </SubmitButton>
                </div>
            </Form>
        </FormikProvider>
    );
}
