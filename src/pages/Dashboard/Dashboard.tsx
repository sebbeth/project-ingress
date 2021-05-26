import React from 'react';
import './Dashboard.scss';
import { getRooms } from '../../helpers';
import { createAttendee } from '../../data/FirebaseHelpers';
import Event from '../../models/Event';
import Button from 'react-bootstrap/Button';
import RoomsList from '../../components/RoomsList/RoomsList';

export interface IDashboardProps {
    event: Event;
}


const Dashboard: React.FC<IDashboardProps> = (props) => {
    const { event } = props;
    const rooms = getRooms();
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
                        <span key={index}>
                            <div>{room.title}</div>
                            {/* <div>Registered: {registeredAttendees.length}</div> */}
                            <div>Checked-In: {checkedInAttendees.length}</div>
                            <br />
                        </span>
                    )
                })
            }
            <RoomsList />
            #testing#
            <Button onClick={() => createAttendee(event.id)}>Add Attendee</Button>
        </div>
    );
}

export default Dashboard;
