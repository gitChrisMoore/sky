import { getIndividual, getPersonByID, IIndividual, IPerson, useAuth } from '@sky/manatee';
import React, { useEffect, useState } from 'react';

const IdentityWidget = () => {
    const { user } = useAuth();
    const [identity, setIdentity] = useState<IIndividual>();
    const [person, setPerson] = useState<IPerson>({});

    const handleGetIndividual = async () => {
        const [individual] = await getIndividual();
        if (individual) setIdentity(individual);
    };
    const handleGetPerson = async () => {
        if (identity) {
            console.log(identity);
            const [person] = await getPersonByID(identity.persons_id);
            if (person) setPerson(person);
        }
    };
    useEffect(() => {
        handleGetIndividual();
    }, []);

    useEffect(() => {
        handleGetPerson();
    }, [identity]);

    return (
        <ul>
            <li>
                {/* {item.effectiveDate} {item.amount} */}
                {user?.email}
            </li>
            <li>
                {/* {item.effectiveDate} {item.amount} */}
                {identity?.persons_id}
            </li>
            <li>
                {/* {item.effectiveDate} {item.amount} */}
                {person.firstName}
            </li>
        </ul>
    );
};

export default IdentityWidget;
