import React, { useState } from 'react';
import { LeftNavDrawer, TopAppBar } from '@sky/piccaso';
import NavTemplate from './NavTemplate';

type Props = {
    pageTitle: string;
    children: React.ReactNode;
};

const PageTemplate: React.FC<Props> = (props) => {
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
        </>
    );
};

export default PageTemplate;
