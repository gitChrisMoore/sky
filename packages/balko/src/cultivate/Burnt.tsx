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
    timer?: number;
}

const Burnt: React.FC<Props> = (props) => {
    const { snacks, setSnacks, timer = 4 } = props;

    const filterTime = () => {
        const milliseconds = timer * 1000;
        return new Date(new Date().getTime() - milliseconds);
    };

    const handleRemove = () => {
        console.log('handleRemove', snacks);
        const newSnacks = snacks.filter((t: Snack) => t.addedTime >= filterTime());
        console.log('newSnacks', newSnacks);
        setSnacks(newSnacks);
        console.log('newSnacks', newSnacks);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (snacks.length) handleRemove();
        }, 8000);

        return () => {
            clearInterval(interval);
        };
    }, [snacks, handleRemove]);

    return (
        <div className="">
            {''}
            Hi there, this is burnt
            <div className=" fixed bottom-2 right-2">
                {snacks.map((snack, i) => (
                    //
                    <div className="flex rounded-full">
                        <div
                            key={snack.id}
                            className="animate-wiggle linear animation-fill-forwards mb-1 border-2 /
                                      flex shadow-md opacity-90">
                            <button onClick={() => console.log('toast delete')}>X</button>
                            <div>
                                <p className="animate-wiggle h-18 bg-yellow-400">{snack.title}</p>
                                <p className="bg-lime-500">{snack.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Burnt;
