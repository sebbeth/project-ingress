import React from 'react';
import './CheckIn.css';
import Attendee from '../../models/Attendee';
import CheckInButton from '../CheckInButton/CheckInButton';
import SearchField from '../SearchField/SearchField';
import { getSections } from '../../helpers';
import { filterAttendeesByRoom, filterAttendeesBySearch } from "./CheckInHelpers";
export interface ICheckInProps {
    attendees: Attendee[];
    checkIn(attendee: Attendee, checkedIn: boolean): void;
}

const CheckIn: React.FC<ICheckInProps> = (props) => {

    const [selectedRoom, setSelectedRoom] = React.useState("");
    const [search, setSearch] = React.useState("");

    let attendees = filterAttendeesByRoom(props.attendees, selectedRoom);
    attendees = filterAttendeesBySearch(attendees, search);
    let sections = getSections(props.attendees);
    sections.unshift(""); // Add a blank default option
    return (
        <div className="root">
            <div>Checkin</div>
            <input type={"text"} onChange={(event) => setSearch(event.target.value)} value={search} />
            <div>Filter by Room</div>
            <select onChange={(event) => setSelectedRoom(event.target.value)} value={selectedRoom}>{
                sections.map((section, index) => {
                    return (<option key={index} value={section} label={section}></option>)
                })
            }</select>
            <div className={"attendee-contaner"}>
                {
                    attendees.map((attendee: Attendee, index) => {
                        return (
                            <div key={index} className={"attendee-card"}>
                                <div>{attendee.getFullname()}</div>
                                <div>{attendee.room}</div>
                                <CheckInButton
                                    checkedIn={attendee.checkedIn}
                                    onClick={() => {
                                        props.checkIn(attendee, !attendee.checkedIn);
                                    }} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default CheckIn;
