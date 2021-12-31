import React, { useState } from 'react';
import { TextInputField, SubmitButton } from '@sky/piccaso';
import Burnt from './cultivate/Burnt';

interface Snack {
    id: number;
    title: string;
    description: string;
}

let newsnack = { id: 1, title: 'Toast 1', description: 'description of the toast' };

function App() {
    const [snacks, setSnacks] = useState([] as any);
    const [counter, setCounter] = useState(1);

    const handleAdd = (snack: Snack) => {
        const newSnack = {
            id: counter,
            title: snack.title,
            description: snack.description,
            addedTime: new Date().getTime()
        };
        console.log(newSnack);
        setCounter(counter + 1);
        setSnacks([...snacks, newSnack]);
    };

    const handleRemove = (snack: Snack) => {
        const newSnacks = snacks.filter((t: Snack) => t !== snack);
        setSnacks(newSnacks);
    };

    const handleRemoveLast = () => {
        if (snacks.length > 0) {
            const newSnacks = snacks.slice(0, snacks.length - 1);
            setSnacks(newSnacks);
        }
        console.log('not enough snacks');
    };

    return (
        <div>
            <div className=" align-middle justify-center  px-2 py-2">
                {''}
                <div className=" bg-green-300">
                    <button onClick={() => handleAdd(newsnack)}> new snack</button>
                </div>
                <div className=" bg-blue-300">
                    <button onClick={() => handleRemove(newsnack)}> remove one</button>
                </div>
                <div className=" bg-slate-300">
                    <button onClick={() => handleRemoveLast()}> remove last</button>
                </div>

                <Burnt snacks={snacks} setSnacks={setSnacks} />
                <div className="max-w-sm mx-auto rounded-lg p-6 space-y-4 py-10">
                    <TextInputField id="Email" label="Email"></TextInputField>
                    <TextInputField id="password" label="Password"></TextInputField>
                    <div className="flex grow ml-auto w-4/12">
                        <SubmitButton id="login" label="Login"></SubmitButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
