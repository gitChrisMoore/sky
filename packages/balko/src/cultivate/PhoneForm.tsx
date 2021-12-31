import React from 'react';
import { TextInputField, SelectInputField } from '@sky/piccaso';
import { useFormik, FormikProvider, Field, Form } from 'formik';
import * as yup from 'yup';
import { StateDictionary } from '@sky/manatee';

interface PhoneFormValues {
    phoneNumber: string;
    state: string;
}

const PhoneForm = () => {
    const handleSubmit = async (formValues: PhoneFormValues) => {
        //
        console.log('handleSubmit ', formValues);
    };

    const validationSchema = yup.object({
        phoneNumber: yup.string().required()
    });

    const handleStateOptions = () => {
        const selectArray = StateDictionary.map((state) => {
            ///
            return { id: Object.keys(state)[0], name: Object.values(state)[0] };
        });
        return selectArray;
    };

    const formik = useFormik({
        initialValues: {
            phoneNumber: '',
            state: ''
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
                    label="phoneNumber"
                    component={TextInputField}
                />{' '}
                <Field
                    id="state"
                    name="state"
                    label="US State"
                    component={SelectInputField}
                    option_list={handleStateOptions()}
                />
                <button id="submit" name="submit">
                    Continue
                </button>
            </Form>
        </FormikProvider>
    );
};

export default PhoneForm;
