import React, { useState } from 'react';
import { LeftNavDrawer, LeftNavDrawerItem, TopAppBar } from '@sky/piccaso';

type Props = {
    pageTitle?: string;
};

const NavTemplate: React.FC<Props> = (props) => {
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

            <LeftNavDrawer isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen}>
                <h2 className=" font-bold mx-2 pt-2 leading-normal text-slate-800">
                    {/* Primary Nav */}
                    {'Enrollment Flow'}
                </h2>
                {primaryNavs?.map((t) => {
                    return <LeftNavDrawerItem key={t.name} title={t.name} to={t.path} />;
                })}
            </LeftNavDrawer>
        </>
    );
};

export default NavTemplate;
