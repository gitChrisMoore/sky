import React from 'react';
import AppTemplate from 'src/components/pages/AppTemplate';
import ViewQRCodeWidget from 'src/components/ViewQRCodeWidget/ViewQRCodeWidget';

const Scan = () => {
    const title = 'Scan';

    return (
        <AppTemplate pageTitle={title}>
            {''}
            <ViewQRCodeWidget />
        </AppTemplate>
    );
};

export default Scan;
