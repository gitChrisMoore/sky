import React, { useState } from 'react';
import { LeftNavDrawer, LeftNavDrawerItem, TopAppBar } from '@sky/piccaso';

const NavTemplate = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const authNavs = [
        { path: '/auth/login', name: 'Login' },
        { path: '/auth/signup', name: 'Signup' }
    ];
    const enrollNavs = [
        { path: '/enroll/addressform', name: 'Address' },
        { path: '/enroll/personform', name: 'Person' },
        { path: '/enroll/phoneform', name: 'Phone' },
        { path: '/enroll/decision', name: 'Decision' }
    ];
    const appNavs = [
        { path: '/app/account', name: 'Account' },
        { path: '/app/dashboard', name: 'Dashboard' },
        { path: '/app/profile', name: 'Profile' },
        { path: '/app/scan', name: 'Scan' }
    ];
    const appEmployeeNavs = [{ path: '/app/sale', name: 'Sale' }];

    return (
        <>
            <TopAppBar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />

            <LeftNavDrawer isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen}>
                {/* Auth */}
                <h2 className=" font-bold mx-2 py-2 leading-snug text-slate-800">{'Enrollment'}</h2>
                {authNavs.map((t) => {
                    return <LeftNavDrawerItem key={t.name} title={t.name} to={t.path} />;
                })}
                {/* Enroll */}
                <h2 className=" font-bold mx-2 py-2 leading-snug text-slate-800">{'Enrollment'}</h2>
                {enrollNavs.map((t) => {
                    return <LeftNavDrawerItem key={t.name} title={t.name} to={t.path} />;
                })}
                {/* App */}
                <h2 className=" font-bold mx-2 py-2 leading-snug text-slate-800">{'App'}</h2>
                {appNavs.map((t) => {
                    return <LeftNavDrawerItem key={t.name} title={t.name} to={t.path} />;
                })}
                {/* App: Employee */}
                <h2 className=" font-bold mx-2 py-2 leading-snug text-slate-800">{'App'}</h2>
                {appEmployeeNavs.map((t) => {
                    return <LeftNavDrawerItem key={t.name} title={t.name} to={t.path} />;
                })}{' '}
            </LeftNavDrawer>
        </>
    );
};

export default NavTemplate;
