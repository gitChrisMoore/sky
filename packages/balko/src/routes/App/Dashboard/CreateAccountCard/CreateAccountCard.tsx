import React from 'react';
import { Card } from '@sky/piccaso';
import { useNavigate } from 'react-router-dom';

interface Props {
    hasAccount: boolean;
}

const CreateAccountCard: React.FC<Props> = (props) => {
    const { hasAccount } = props;
    const navigate = useNavigate();

    const handlePrimaryActionClick = () => {
        navigate('/app/openaccount');
    };

    if (!hasAccount) {
        return (
            <Card
                headline="Welcome!"
                supportingText="Thanks for joining, setup card now"
                primaryActionText="getstarted"
                primaryActionOnClick={handlePrimaryActionClick}
            />
        );
    } else {
        return <></>;
    }
};

export default CreateAccountCard;
