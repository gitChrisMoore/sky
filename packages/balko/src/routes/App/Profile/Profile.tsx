import React from 'react';
import IdentityWidget from 'src/components/IdentityWidget/IdentityWidget';

import AppTemplate from 'src/components/pages/AppTemplate';

const Profile = () => {
    const title = 'Profile';

    return (
        <AppTemplate pageTitle={title}>
            {''}
            <IdentityWidget />
            <ul>
                <li>Sign Out</li>
            </ul>
        </AppTemplate>
    );
};

export default Profile;
