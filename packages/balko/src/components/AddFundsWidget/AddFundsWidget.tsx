import React, { useState } from 'react';
import { RegularModal } from '@sky/piccaso';
import { AddFundsForm } from './AddFundsForm';
import { createTransaction, getAccounts, getIndividual, useAuth } from '@sky/manatee';

const AddFundsWidget = () => {
    const [showModal, setShowModal] = useState(false);
    const { user } = useAuth();

    const title = 'Add some money';
    const closeModal = () => {
        setShowModal(false);
    };
    const submitModal = () => {
        setShowModal(false);
        console.log('modal was submmited');
    };
    const handleSubmit = async (formValues: { amount: number }) => {
        setShowModal(false);
        const [individual] = await getIndividual();
        const [accounts] = await getAccounts();
        if (
            accounts &&
            accounts[0].id &&
            accounts[0].accountProducts_id &&
            individual &&
            individual.id
        ) {
            const newRequest = {
                amount: formValues.amount,
                state_id: 500,
                stateDescription: 'PENDING_APPROVAL',
                type: 'FUNDS_ADD',
                createdBy: user?.id,

                user_id: user.id,
                individuals_id: individual.id,
                accounts_id: accounts[0].id,
                accountProducts_id: accounts[0].accountProducts_id,

                balanceDelta: formValues.amount,
                processed: false,
                status: 'TEST'
            };

            const [data, error] = await createTransaction(newRequest);
            error ? alert(error.message) : console.log('created tx, ', data);
        }

        // if (user && user.id && individual && individual.id ) {

        // }
        console.log('handleSubmit', formValues);
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
                <div className="mx-auto pt-3 px-4 max-w-md justify-center ">
                    <AddFundsForm handleSubmit={handleSubmit} />
                </div>
            </RegularModal>
        </div>
    );
};

export default AddFundsWidget;
