import React from 'react';
import './CheckIn.scss';
import Attendee from '../../models/Attendee';
import { getRoom, getAttendeeFullName } from '../../helpers';
import { filterAttendeesByRoom, filterAttendeesBySearch } from "./CheckInHelpers";
import Room from '../../models/Room';
import CheckInButton from '../../components/CheckInButton/CheckInButton';
export interface ICheckInProps {
    attendees: Attendee[];
    rooms: Room[];
    updateAttendee(attendee: Attendee): void;
}

const CheckIn: React.FC<ICheckInProps> = (props) => {

    const [selectedRoom, setSelectedRoom] = React.useState("");
    const [search, setSearch] = React.useState("");
    let rooms = [...props.rooms];

    let attendees = filterAttendeesByRoom(props.attendees, selectedRoom);
    attendees = filterAttendeesBySearch(attendees, search);
    console.log(attendees);
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
                    attendees.map((attendee: Attendee, index) => <AttendeeItem
                        key={index}
                        attendee={attendee}
                        roomTitle={getRoom(attendee.room, rooms)?.title}
                        updateAttendee={props.updateAttendee}
                    />
                    )
                }
            </div>
        </div>
    );
}

interface IAttendeeItemProps {
    key: number;
    attendee: Attendee;
    roomTitle?: string;
    updateAttendee(attendee: Attendee): void
}

const AttendeeItem: React.FC<IAttendeeItemProps> = (props) => {
    const { key, attendee, roomTitle, updateAttendee } = props;
    return (
        <div key={key} className={"attendee-card"}>
            <div>{getAttendeeFullName(attendee)}</div>
            <div>{roomTitle}</div>
            <CheckInButton
                checkedIn={attendee.checkedIn}
                onClick={() => {
                    attendee.checkedIn = !attendee.checkedIn;
                    updateAttendee(attendee);
                }} />
        </div>
    );
}


export default CheckIn;
