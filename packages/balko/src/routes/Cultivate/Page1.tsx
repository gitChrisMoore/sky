import React, { useState } from 'react';
// import { AlertBanner, TopPageTemplate } from '@sky/piccaso';
import { LeftNavDrawer, TopAppBar } from '@sky/piccaso';

function Page1() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNavOpen = (e: any) => {
        e.preventDefault();
        setIsNavOpen(!isNavOpen);
    };

    return (
        //: any
        <>open open</>
    );
}

export default Page1;
