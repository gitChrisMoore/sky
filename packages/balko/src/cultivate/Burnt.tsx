import React, { useEffect } from 'react';

interface Snack {
    id: number;
    title: string;
    description: string;
    addedTime: Date;
}

interface Props {
    snacks: Array<any>;
    setSnacks: ([]) => void;
}

const Burnt: React.FC<Props> = (props) => {
    const { snacks, setSnacks } = props;

    const handleRemove = (snack: Snack) => {
        const seconds = 5000;
        const currentTime = new Date(new Date().getTime() - seconds);
        console.log(snack);
        console.log(currentTime);
        const newSnacks = snacks.filter((t: Snack) => t.addedTime >= currentTime);
        console.log('handleRemove snacks', snacks);
        console.log('handleRemove newSnack', newSnacks);
        setSnacks(newSnacks);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (snacks.length) {
                handleRemove(snacks[0]);
            }
        }, 200);

        return () => {
            clearInterval(interval);
        };
    }, [snacks, handleRemove]);

    return (
        <div className="">
            {''}
            Hi there, this is burnt
            <div className=" fixed bottom-1 right-1">
                {snacks.map((snack, i) => (
                    //
                    //
                    <div
                        key={snack.id}
                        // className={`${styles.notification} ${styles.toast} ${styles[position]}`}
                        // style={{ backgroundColor: toast.backgroundColor }}>
                        className="animate-wiggle linear forwards mb-1 border-2 shadow-md opacity-90 max-h-52 w-80 translateX       bg-slate-600">
                        <button onClick={() => console.log('toast delete')}>X</button>
                        <div>
                            <p className="h-18 bg-yellow-400">{snack.title}</p>
                            <p className="bg-lime-500">{snack.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Burnt;
