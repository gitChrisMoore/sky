import React from 'react';
import { TextInputField, SubmitButton } from '@sky/piccaso';
import { createAddress } from '@sky/manatee';

function App() {
    console.log('SimpleText', createAddress());
    return (
        <div className=" align-middle justify-center  px-2 py-2">
            {''}
            <div className="max-w-sm mx-auto rounded-lg p-6 space-y-4 py-10">
                <TextInputField id="Email" label="Email"></TextInputField>
                <TextInputField id="password" label="Password"></TextInputField>
                <div className="flex grow ml-auto w-4/12">
                    <SubmitButton id="login" label="Login"></SubmitButton>
                </div>
            </div>
        </div>
    );
}

export default App;
