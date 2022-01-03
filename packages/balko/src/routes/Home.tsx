import React, { useState } from 'react';
import { AlertBanner, RegularModal } from '@sky/piccaso';

function Home() {
    const [alertBanner, setAlertBanner] = useState(false);

    const handleShowAlertBanner = () => {
        setAlertBanner(true);
    };

    return (
        //
        <>
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
