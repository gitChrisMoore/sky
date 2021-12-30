import React from 'react';

interface Props {
    id: string;
    label: string;
}

const SubmitButton: React.FC<Props> = (props) => {
    const { id, label } = props;
    //

    return (
        <div className="flex grow">
            <button
                className="grow bg-violet-600 py-2 text-slate-200 rounded-xl border-2 border-hidden /
                           hover:bg-violet-800 hover:border-2 hover:border-hidden/
                           focus:border-2 focus:border-violet-800">
                {''}
                {label}
            </button>
        </div>
    );
};

export default SubmitButton;
