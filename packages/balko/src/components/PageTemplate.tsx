import React, { useState } from 'react';
import { LeftNavDrawer, TopAppBar } from '@sky/piccaso';

type Props = {
    pageTitle: string;
    children?: React.ReactNode;
};

const PageTemplate: React.FC<Props> = (props) => {
    const { pageTitle } = props;
    const [isNavOpen, setIsNavOpen] = useState(false);

    const primaryNavs = [
        { path: '/enroll/addressform', name: 'Address' },
        { path: '/enroll/personform', name: 'Person' },
        { path: '/enroll/phoneform', name: 'Phone' }
    ];

    return (
        <>
            <TopAppBar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
            <LeftNavDrawer
                isNavOpen={isNavOpen}
                setIsNavOpen={setIsNavOpen}
                primaryNav={primaryNavs}>
                {/* Navs */}
                {/* <NavLink
                    to="/enroll/addressform"
                    className={(isActive) =>
                        'nav-link ' + (!isActive ? 'bg-red-300' : 'bg-slate-400')
                    }>
                    {' '}
                    Address{' '}
                </NavLink> */}
            </LeftNavDrawer>
            {/* Main Content Window */}
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
