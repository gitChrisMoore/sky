import React from 'react';
import { useFormik, FormikProvider, Field, Form } from 'formik';
import * as yup from 'yup';
import { TextInputField, SubmitButton, SelectInputField } from '@sky/piccaso';
import { StateDictionary } from '@sky/manatee';
import PageTemplate from 'src/components/pages/PageTemplate';

interface AddressFormValues {
    address1: string;
    address2?: string;
    city: string;
    state: string;
    postalCode: string;
    country?: string;
}

export function AddressForm() {
    const handleSubmit = async (formValues: AddressFormValues) => {
        console.log('formValues', formValues);
    };

    const handleStatesOptions = () => {
        const stateOptions = StateDictionary.map((state) => {
            return { id: Object.keys(state)[0], name: Object.values(state)[0] };
        });
        return stateOptions;
    };

    const validationSchema = yup.object({
        address1: yup.string().required(),
        address2: yup.string(),
        city: yup.string().required(),
        state: yup.string().required(),
        postalCode: yup.string().required()
    });

    const formik = useFormik({
        initialValues: {
            address1: '',
            address2: '',
            city: '',
            state: '',
            postalCode: '',
            country: 'US'
        },
        validationSchema: validationSchema,
        onSubmit: handleSubmit
    });

    return (
        <PageTemplate pageTitle="Personal Address">
            <FormikProvider value={formik}>
                <Form onSubmit={formik.handleSubmit}>
                    <Field
                        id="address1"
                        name="address1"
                        label="Address 1"
                        component={TextInputField}
                    />
                    <Field
                        id="address2"
                        name="address2"
                        label="Address 2"
                        component={TextInputField}
                    />
                    <Field id="city" name="city" label="City" component={TextInputField} />
                    <Field
                        id="state"
                        name="state"
                        label="State"
                        component={SelectInputField}
                        option_list={handleStatesOptions()}
                    />
                    <Field
                        id="postalCode"
                        name="postalCode"
                        label="Zip Code"
                        component={TextInputField}
                    />

                    <div className="mt-2">
                        <SubmitButton id="submit" label="submit">
                            Continue
                        </SubmitButton>
                    </div>
                </Form>
            </FormikProvider>
        </PageTemplate>
    );
}
