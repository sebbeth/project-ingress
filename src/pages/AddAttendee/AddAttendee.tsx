import React from 'react';
import './AddAttendee.scss';
import Attendee from '../../models/Attendee';

export interface IAddAttendeeProps {
}

const AddAttendee: React.FC<IAddAttendeeProps> = (props) => {
    return (
        <div className="root">
            Add Attendee
        </div>
    );
}

export default AddAttendee;
