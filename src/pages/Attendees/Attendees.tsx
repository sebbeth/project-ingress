import React from 'react';
import './Attendees.scss';
import Attendee from '../../models/Attendee';

export interface IAttendeesProps {
}

const Attendees: React.FC<IAttendeesProps> = (props) => {
    return (
        <div className="root">
            Attendees
        </div>
    );
}

export default Attendees;
