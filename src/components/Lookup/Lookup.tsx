import React from 'react';
import './Lookup.css';
import Attendee from '../../models/Attendee';

export interface ILookupProps {
    registrations: Attendee[];
}

const Lookup: React.FC<ILookupProps> = (props) => {
    return (
        <div className="root">
            <div>Registrations:</div>
            <div className="registrations">
                {
                    props.registrations.map((attendee, index) => {
                        return (
                            <div className="attendee">
                                <div>{attendee.getFullname()}</div>
                                <div>{attendee.room}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Lookup;
