import React, { useState, useEffect } from 'react';
import { Snack } from '../../shared/interfaces/snack.interface';
import SnackbarList from './SnackbarList';

const Snackbar = () => {
    const [snacks, setSnacks] = React.useState<Array<Snack>>([]);
    const [counter, setCounter] = useState(1);
    const timer = 4;

    const addSnack = (title: string, description: string) => {
        const newSnack: Snack = {
            id: counter,
            title: title,
            description: description,
            addedTime: new Date(new Date().getTime())
        };
        console.log(newSnack);
        setCounter(counter + 1);
        const newSnacks = [...snacks, newSnack];
        setSnacks(newSnacks);
    };

    console.log('useSnack state', snacks);

    const filterTime = () => {
        const milliseconds = timer * 1000;
        return new Date(new Date().getTime() - milliseconds);
    };

    const handleRemove = () => {
        const newSnacks = snacks.filter((t: Snack) => t.addedTime >= filterTime());
        setSnacks(newSnacks);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (snacks.length) handleRemove();
        }, 8000);

        return () => {
            clearInterval(interval);
        };
    }, [snacks, handleRemove]);

    const SnackbarContainer = () => {
        return <SnackbarList snacks={snacks} />;
    };

    return {
        addSnack,
        SnackbarContainer
    };
};

export default Snackbar;
