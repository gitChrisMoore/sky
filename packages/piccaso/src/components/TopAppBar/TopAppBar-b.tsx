import React, { useEffect, useRef } from 'react';
import NavItem from './NavItem';

interface Props {
    title: string;
    showModal: any;
    closeModal: any;
    submitModal: any;
}

const TopAppBar: React.FC<Props> = (props) => {
    const { title, showModal, closeModal, submitModal } = props;

    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const checkIfClickedOutside = (e: any) => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            // console.log('log all ', divRef);
            // console.log('checkIfClickedOutside', e);
            if (divRef.current && !divRef.current.contains(e.target)) {
                // console.log('just divref', divRef);
                closeModal();
            }
            if (showModal && divRef.current && !divRef.current.contains(e.target)) {
                // console.log('divRef', divRef);
                closeModal();
            }
        };

        document.addEventListener('mousedown', checkIfClickedOutside);

        return () => {
            // Cleanup the event listener
            document.removeEventListener('mousedown', checkIfClickedOutside);
        };
    }, [showModal]);

    return (
        <>
            <div
                className={`transistion transform duration-200 ease-in-out m-auto flex overflow-x-hidden overflow-y-auto fixed inset-0 z-20 outline-none focus:outline-none
                ${showModal ? 'active' : '-translate-x-full'} `}>
                <div className="justify-items-start mt-16 ml-2 pt-1 w-72 ">
                    {/*content*/}
                    <div
                        ref={divRef}
                        className="border-0 px-2 rounded-2xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <NavItem title="Link 1"></NavItem>
                        <NavItem title="Link 2"></NavItem>
                        <NavItem title="Link 3"></NavItem>
                        <NavItem title="Link 4"></NavItem>
                    </div>
                </div>
            </div>
            {/* Modal background */}
            <div className={` ${showModal ? 'opacity-25 fixed inset-0 z-10 bg-black' : ''} `}></div>
        </>
    );
};

export default TopAppBar;
