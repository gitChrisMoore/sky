import React, { useState } from 'react';
import { TextInputField, SubmitButton, Snackbar } from '@sky/piccaso';

// interface Snack {
//     id: number;
//     title: string;
//     description: string;
// }

// let newsnack = { id: 1, title: 'Toast 1', description: 'description of the toast' };

function App() {
    const { addSnack, SnackbarContainer } = Snackbar();
    // const [snacks, setSnacks] = useState([] as any);
    // const [counter, setCounter] = useState(1);

    // const handleAdd = (snack: Snack) => {
    //     const newSnack = {
    //         id: counter,
    //         title: snack.title,
    //         description: snack.description,
    //         addedTime: new Date().getTime()
    //     };
    //     console.log(newSnack);
    //     setCounter(counter + 1);
    //     setSnacks([...snacks, newSnack]);
    // };

    // const handleRemove = (snack: Snack) => {
    //     const newSnacks = snacks.filter((t: Snack) => t !== snack);
    //     setSnacks(newSnacks);
    // };

    // const handleRemoveLast = () => {
    //     if (snacks.length > 0) {
    //         const newSnacks = snacks.slice(0, snacks.length - 1);
    //         setSnacks(newSnacks);
    //     }
    //     console.log('not enough snacks');
    // };

    return (
        <div>
            <div className=" align-middle justify-center  px-2 py-2">
                {''}
                <div className=" bg-green-300">
                    <button onClick={() => addSnack('TitleA', 'asdasd')}> new snack</button>
                </div>
                {/* <div className=" bg-blue-300">
                    <button onClick={() => handleRemove(newsnack)}> remove one</button>
                </div>
                <div className=" bg-slate-300">
                    <button onClick={() => handleRemoveLast()}> remove last</button>
                </div> */}

                <SnackbarContainer />

                <div className="max-w-sm mx-auto rounded-lg p-6 space-y-4 py-10">
                    <TextInputField id="Email" label="Email"></TextInputField>
                    <TextInputField id="password" label="Password"></TextInputField>
                    <div className="flex grow ml-auto w-4/12">
                        <SubmitButton id="login" label="Login"></SubmitButton>
                    </div>
                </div>
                <div
                    className="bg-green-100 rounded-full outline outline-2 / 
                                flex border-2 border-white shadow-lg max-w-md /
                                 justify-items-start ">
                    {''}

                    <div className=" bg-slate-500 rounded-full ml-2 my-1 px-2 text-gray-50">
                        Ttile
                    </div>
                    <div className="rounded-full  my-1 px-2 text-slate-500">
                        Lorem ipsum lorem ipsum Lorem
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
