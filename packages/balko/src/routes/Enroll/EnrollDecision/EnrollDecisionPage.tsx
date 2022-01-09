import {
    createIndividual,
    getMostRecentAddress,
    getMostRecentPerson,
    getMostRecentPhone,
    useAuth
} from '@sky/manatee';
import { LoadSpinner } from '@sky/piccaso';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function EnrollDecisionPage() {
    const { user } = useAuth();
    const navigate = useNavigate();

    async function sleep(ms: number) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
    const handleDecision = async () => {
        const [person] = await getMostRecentPerson();
        const [address] = await getMostRecentAddress();
        const [phone] = await getMostRecentPhone();
        await sleep(3000);
        if (person && person.id && address && address.id && phone && phone.id) {
            console.log('all exist');
            const newIndividual = {
                user_id: user.id,
                persons_id: person.id,
                addresses_id: address.id,
                phoneNumbers_id: phone.id
            };
            const [, error] = await createIndividual(newIndividual);
            error ? alert(error.message) : navigate('/app/dashboard');
        }
    };

    useEffect(() => {
        handleDecision();
    }, []);

    return (
        <div className="max-w-md px-2 m-auto justify-center v-screen ">
            <div className="grid justify-center items-center mt-40">
                <div className="col-span-12 m-auto">
                    <p>Processing the application..</p>
                </div>

                <div className="col-span-12 m-auto">
                    <br />
                    <LoadSpinner />
                </div>
            </div>
        </div>
    );
}
export default EnrollDecisionPage;
