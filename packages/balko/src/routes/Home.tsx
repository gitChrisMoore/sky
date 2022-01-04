import React, { useState } from 'react';
import { AlertBanner, RegularModal } from '@sky/piccaso';
import AppBar from './Cultivate/AppBar';

function Home() {
    const [alertBanner, setAlertBanner] = useState(false);

    const handleShowAlertBanner = () => {
        setAlertBanner(true);
    };

    return (
        //
        <>
            <AppBar></AppBar>
            <div className="App"> Home Home</div>

            <AlertBanner
                // title="Bold"
                description="This is the longer form"
                alertBanner={alertBanner}
                setAlertBanner={setAlertBanner}></AlertBanner>

            <button type="button" onClick={handleShowAlertBanner}>
                Show Alert
            </button>
        </>
    );
}

export default Home;
