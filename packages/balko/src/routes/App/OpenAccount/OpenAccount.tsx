import React from 'react';
import NavTemplate from 'src/components/pages/NavTemplate';
import { useNavigate } from 'react-router-dom';

const OpenAccount = () => {
    const navigate = useNavigate();

    const handlePrimaryActionClick = () => {
        navigate('/app/dashboard');
    };

    return (
        <>
            <NavTemplate />
            <div className="text-2xl mx-auto font-semibold leading-normal bg-slate-100 mt-0 pl-6 pb-2  text-slate-800">
                {'Open Account'}
            </div>
            <div className="mx-auto pt-3 px-4 max-w-md justify-center ">
                {/*  */}
                {''}
            </div>
            <button
                onClick={handlePrimaryActionClick}
                className="text-sm leading-relaxed bg-slate-500 text-slate-100 rounded-full py-2 px-3 ml-auto">
                {''}
                {'Open Account'}
            </button>
        </>
    );
};

export default OpenAccount;
