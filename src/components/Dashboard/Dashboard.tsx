import React from 'react';
import './Dashboard.css';
import Attendee from '../../models/Attendee';
import { getSections, getAttendeesForSection } from '../../helpers';

export interface IDashboardProps {
    attendees: Attendee[];
}


const Dashboard: React.FC<IDashboardProps> = (props) => {

    const sections = getSections(props.attendees);
    return (
        <div className="root">
            <div>
                Dashboard
            </div>
            {
                sections.map((section, index) => {
                    const registeredAttendees = getAttendeesForSection(section, props.attendees);
                    const checkedInAttendees = props.attendees.filter(attendee => (attendee.checkedIn));
                    return (
                        <>
                            <div>{section}</div>
                            <div>Registered: {registeredAttendees.length}</div>
                            <div>Checked-In: {checkedInAttendees.length}</div>
                            <br />
                        </>
                    )
                })
            }
        </div>
    );
}

export default Dashboard;
