import React from 'react';

import AppTemplate from 'src/components/pages/AppTemplate';

import CreateAccountCard from './CreateAccountCard/CreateAccountCard';

const Dashboard = () => {
    const title = 'Dashboard';
    const hasAccount = false;

    return (
        <AppTemplate pageTitle={title}>
            {''}

            <CreateAccountCard hasAccount={hasAccount} />
        </AppTemplate>
    );
};

export default Dashboard;
