import React, { useState } from 'react';
import { RegularModal } from '@sky/piccaso';

const AddFundsWidget = () => {
    const [showModal, setShowModal] = useState(false);

    const title = 'Title 1';
    const closeModal = () => {
        setShowModal(false);
    };
    const submitModal = () => {
        setShowModal(false);
        console.log('modal was submmited');
    };

    return (
        <div className="flex mx-auto my-4 justify-center">
            <button
                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}>
                Add Funds
            </button>
            <RegularModal
                title={title}
                closeModal={closeModal}
                submitModal={submitModal}
                showModal={showModal}>
                {/* Children */}
            </RegularModal>
        </div>
    );
};

export default AddFundsWidget;
