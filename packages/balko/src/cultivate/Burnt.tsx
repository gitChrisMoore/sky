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

// TODO: add additional colors

const Burnt: React.FC<Props> = (props) => {
    const { snacks, setSnacks, timer = 4 } = props;

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

    return (
        <div className="">
            {''}
            Hi there, this is burnt
            <div className=" fixed bottom-2 right-2">
                {snacks.map((snack, i) => (
                    //
                    <div className="flex ">
                        <div
                            key={snack.id}
                            className="bg-green-100 rounded-full outline outline-2 / 
                                flex border-2 border-white shadow-lg max-w-md /
                                 justify-items-start opacity-90 text-sm /
                                 animate-wiggle linear animation-fill-forwards mb-2 ">
                            {''}

                            <div className=" bg-slate-500 rounded-full ml-2 my-1 px-2 text-gray-50">
                                {snack.title}
                            </div>
                            <div className="rounded-full  my-1 px-2 text-slate-500">
                                {snack.description}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Burnt;
