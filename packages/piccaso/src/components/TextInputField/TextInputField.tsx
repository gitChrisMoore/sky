import React from 'react';

interface Props {
    id: string;
    label: string;
}

const TextInputField: React.FC<Props> = (props) => {
    const { id, label } = props;
    //
    const errorText = 'error';

    return (
        <div className="grow">
            <div
                className="grow bg-slate-100 pt-2 mb-0.5 rounded-t-md border-b border-slate-600 /
                           focus-within:bg-slate-200 focus-within:mb-px focus-within:border-b-2 focus-within:border-violet-500">
                <div className="ml-3 relative grow  mt-2 z-10 ">
                    <input
                        type={id}
                        name={label}
                        placeholder=" "
                        className="block w-full text-sm appearance-none mb-2 z-10 focus:outline-none bg-transparent"
                    />
                    <label htmlFor={id} className="absolute -top-1 -z-1 duration-300 origin-0">
                        {label}
                    </label>
                </div>
            </div>
            {errorText ? (
                <div className="ml-3 text-xs text-red-600">{errorText}</div>
            ) : (
                <div className="ml-3 text-xs">{`\u00a0`}</div>
            )}
        </div>
    );
};

export default TextInputField;
