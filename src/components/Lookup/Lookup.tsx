import React from 'react';
import './Lookup.css';
import Attendee from '../../models/Attendee';

export interface ILookupProps {
    attendees: Attendee[];
}

const Lookup: React.FC<ILookupProps> = (props) => {
    return (
        <div className="root">
            Lookup
        </div>
    );
}

export default Lookup;
