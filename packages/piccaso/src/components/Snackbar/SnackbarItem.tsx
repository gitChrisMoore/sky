import React, { useEffect } from 'react';
import { Snack } from '../../shared/interfaces/snack.interface';

const SnackbarItem: React.FC<Snack> = (props) => {
    const { id, title, description } = props;
    console.log('snack props', props);
    return (
        <div
            key={id}
            className="bg-green-100 rounded-full outline outline-2 / 
                                flex border-2 border-white shadow-lg max-w-md /
                                 justify-items-start opacity-90 text-sm /
                                 animate-wiggle linear animation-fill-forwards mb-2 ">
            {''}

            <div className=" bg-slate-500 rounded-full ml-2 my-1 px-2 text-gray-50">{title}</div>
            <div className="rounded-full  my-1 px-2 text-slate-500">{description}</div>
        </div>
    );
};

export default SnackbarItem;
