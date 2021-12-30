import React from 'react';

interface Props {
    id: string;
}

const TextInputField: React.FC<Props> = (props) => {
    //
    return (
        //
        <button className="bg-green-500 rounded" {...props}>
            Click ME PLEASE
        </button>
    );
};

export default TextInputField;
