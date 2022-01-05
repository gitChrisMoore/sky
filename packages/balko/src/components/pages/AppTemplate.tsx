import { BottomNavBar } from '@sky/piccaso';
import React from 'react';
import NavTemplate from './NavTemplate';

type Props = {
    pageTitle?: string;
    children: React.ReactNode;
};

const AppTemplate: React.FC<Props> = (props) => {
    const { pageTitle } = props;

    return (
        <>
            <NavTemplate />
            <div className="mx-auto pt-6 px-4 max-w-md justify-center ">
                <h2 className="text-2xl font-normal leading-normal mt-0 mb-4 text-slate-800">
                    {pageTitle}
                </h2>
                {props.children}
            </div>
            <BottomNavBar />
        </>
    );
};

export default AppTemplate;
