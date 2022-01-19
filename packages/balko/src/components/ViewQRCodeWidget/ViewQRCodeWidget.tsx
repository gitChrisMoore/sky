import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode.react';
import { useAuth } from '@sky/manatee';
import useCurrentBalance from '../useCurrentBalance/useCurrentBalance';

const ViewQRCodeWidget = () => {
    const { user } = useAuth();
    const [payload, setPayload] = useState('asd');
    const currentBalance = useCurrentBalance();

    useEffect(() => {
        if (user && user.id) {
            setPayload(user.id);
        }
    }, [user]);

    return (
        <div className="grid grid-cols-12 my-4">
            {''}
            <div className="col-span-12 mx-auto">
                <QRCode size={200} value={payload} />
            </div>
            <div className="col-span-12 mx-auto">Current Balance: ${currentBalance}</div>
        </div>
    );
};

export default ViewQRCodeWidget;
