import React from 'react';
import './Lookup.scss';
import Attendee from '../../models/Attendee';
import { getAttendeeFullName, getRoom } from '../../helpers';
import Room from '../../models/Room';

export interface ILookupProps {
    attendees: Attendee[];
    rooms: Room[];
}

const Lookup: React.FC<ILookupProps> = (props) => {
    const { attendees, rooms } = props;
    return (
        <div className="root">
            <div>Registrations:</div>
            <div className="attendees">
                {
                    attendees.map((attendee, index) => {
                        return (
                            <div className="attendee">
                                <div>{getAttendeeFullName(attendee)}</div>
                                <div>{getRoom(attendee.room, rooms)?.title}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Lookup;
