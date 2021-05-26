import React from 'react';
import './Account.scss';
import Attendee from '../../models/Attendee';

export interface IAccountProps {
}

const Account: React.FC<IAccountProps> = (props) => {
    return (
        <div className="root">
            Account
        </div>
    );
}

export default Account;
