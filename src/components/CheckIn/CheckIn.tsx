import React from 'react';
import './CheckIn.css';
import Attendee from '../../models/Attendee';
import CheckInButton from '../CheckInButton/CheckInButton';
import SearchField from '../SearchField/SearchField';
import { getRooms, getRoom, getAttendeeFullName } from '../../helpers';
import { filterAttendeesByRoom, filterAttendeesBySearch } from "./CheckInHelpers";
export interface ICheckInProps {
    attendees: Attendee[];
    updateAttendee(attendee: Attendee): void;
}

const CheckIn: React.FC<ICheckInProps> = (props) => {

    const [selectedRoom, setSelectedRoom] = React.useState("");
    const [search, setSearch] = React.useState("");


    let attendees = filterAttendeesByRoom(props.attendees, selectedRoom);
    attendees = filterAttendeesBySearch(attendees, search);
    console.log(attendees);
    let rooms = getRooms(props.attendees);
    rooms.unshift({ id: "0", title: "" }); // Add a blank default option
    return (
        <div className="root">
            <div>Checkin</div>
            <input type={"text"} onChange={(event) => setSearch(event.target.value)} value={search} />
            <div>Filter by Room</div>
            <select onChange={(event) => setSelectedRoom(event.target.value)} value={selectedRoom}>{
                rooms.map((room, index) => {
                    return (<option key={index} value={room.id} label={room.title}></option>)
                })
            }</select>
            <div className={"attendee-contaner"}>
                {
                    attendees.map((attendee: Attendee, index) => {
                        return (
                            <div key={index} className={"attendee-card"}>
                                <div>{getAttendeeFullName(attendee)}</div>
                                <div>{getRoom(attendee.room, rooms)?.title}</div>
                                <CheckInButton
                                    checkedIn={attendee.checkedIn}
                                    onClick={() => {
                                        attendee.checkedIn = !attendee.checkedIn;
                                        props.updateAttendee(attendee);
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
