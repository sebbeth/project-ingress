import React from 'react';
import './Dashboard.css';
import Attendee from '../../models/Attendee';
import { getRooms } from '../../helpers';
import { createAttendee } from '../../data/FirebaseHelpers';
import Event from '../../models/Event';

export interface IDashboardProps {
    event: Event;
}


const Dashboard: React.FC<IDashboardProps> = (props) => {
    const { event } = props;
    const rooms = getRooms(event.attendees);
    return (
        <div className="root">
            <div>
                Dashboard
            </div>
            {
                rooms.map((room, index) => {
                    // const registeredAttendees = getAttendeesForSection(section, props.attendees);
                    const checkedInAttendees = (Array.isArray(event.attendees)) ? event.attendees.filter(attendee => (attendee.checkedIn)) : [];
                    return (
                        <>
                            <div>{room.title}</div>
                            {/* <div>Registered: {registeredAttendees.length}</div> */}
                            <div>Checked-In: {checkedInAttendees.length}</div>
                            <br />
                        </>
                    )
                })
            }
            #testing#
            <button onClick={() => createAttendee(event.id)}>Add Attendee</button>
        </div>
    );
}

export default Dashboard;
