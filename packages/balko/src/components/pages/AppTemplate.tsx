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
            <div className="text-2xl mx-auto font-semibold leading-normal bg-slate-100 mt-0 pl-6 pb-2  text-slate-800">
                {pageTitle}
            </div>
            <div className="mx-auto pt-3 px-4 max-w-md justify-center ">{props.children}</div>
            <BottomNavBar />
        </>
    );
};

export default AppTemplate;
