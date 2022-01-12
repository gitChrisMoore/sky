import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode.react';
import { useAuth } from '@sky/manatee';

const ViewQRCodeWidget = () => {
    const { user } = useAuth();
    const [payload, setPayload] = useState('asd');

    useEffect(() => {
        if (user && user.id) {
            setPayload(user.id);
        }
    }, [user]);

    return (
        <div className="flex mx-auto my-4 justify-center">
            {''}

            <QRCode size={200} value={payload} />
        </div>
    );
};

export default ViewQRCodeWidget;
