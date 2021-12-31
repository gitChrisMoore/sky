import React, { useState } from 'react';
import { TextInputField, SubmitButton, Snackbar, BottomNavBar } from '@sky/piccaso';
import PhoneForm from './cultivate/PhoneForm';

function App() {
    const { addSnack, SnackbarContainer } = Snackbar();

    return (
        <div>
            <div className=" align-middle justify-center  px-2 py-2">
                {''}
                New Home
                <div className=" bg-green-300">
                    <button onClick={() => addSnack('TitleA', 'asdasd')}> new snack</button>
                </div>
                <SnackbarContainer />
                <div className="max-w-sm mx-auto rounded-lg p-6 space-y-4 py-10">
                    <TextInputField id="Email" label="Email"></TextInputField>
                    <TextInputField id="password" label="Password"></TextInputField>
                    <div className="flex grow ml-auto w-4/12">
                        <SubmitButton id="login" label="Login"></SubmitButton>
                    </div>
                </div>
            </div>
            <div>
                <PhoneForm />
            </div>
            <div>
                <BottomNavBar />
            </div>
        </div>
    );
}

export default App;
