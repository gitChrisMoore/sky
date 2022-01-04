//asdasd
import React, { useEffect, useState } from 'react';

interface Props {
    title?: string;
}

const NavItem: React.FC<Props> = (props) => {
    const { title = 'title asdasd' } = props;
    const [isActive, setIsActive] = useState(false);

    const handleToggle = (e: any) => {
        console.log('handletoggle', e);
        e.preventDefault();
        setIsActive(!isActive);
    };

    return (
        <a
            className={`px-2 hover:bg-slate-200 rounded-2xl /
                      ${isActive ? 'bg-slate-200' : ''} `}>
            {''}
            <button className={`flex p-2`} onClick={(e) => handleToggle(e)}>
                {''}
                {title}
            </button>
        </a>
    );
};

export default NavItem;
