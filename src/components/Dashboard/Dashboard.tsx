import React from 'react';
import './Dashboard.css';
import Attendee from '../../models/Attendee';
import { getRooms } from '../../helpers';
import { createAttendee } from '../../data/FirebaseHelpers';

export interface IDashboardProps {
    attendees: Attendee[];
}


const Dashboard: React.FC<IDashboardProps> = (props) => {

    const rooms = getRooms(props.attendees);
    return (
        <div className="root">
            <div>
                Dashboard
            </div>
            {
                rooms.map((room, index) => {
                    // const registeredAttendees = getAttendeesForSection(section, props.attendees);
                    const checkedInAttendees = props.attendees.filter(attendee => (attendee.checkedIn));
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
            <button onClick={() => createAttendee()}>Add Attendee</button>
        </div>
    );
}

export default Dashboard;
