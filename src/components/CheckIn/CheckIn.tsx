import React from 'react';
import './CheckIn.css';
import Attendee from '../../models/Attendee';
import CheckInButton from '../CheckInButton/CheckInButton';
import SearchField from '../SearchField/SearchField';
import { getSections } from '../../helpers';

export interface ICheckInProps {
    attendees: Attendee[];
    checkIn(attendee: Attendee, checkedIn: boolean): void;
}

const CheckIn: React.FC<ICheckInProps> = (props) => {

    function onSearchFieldChanged(event: React.ChangeEvent<HTMLInputElement>) {
        console.log(event);
    }

    const sections = getSections(props.attendees);

    return (
        <div className="root">
            <div>Checkin</div>
            <SearchField onChange={(event) => onSearchFieldChanged(event)} />
            <div>Filter by Section</div>
            <select onChange={(event) => console.log(event)}>{
                sections.map((section, index) => {
                    return (<option key={index} value={section} label={section}></option>)
                })
            }</select>
            <div className={"attendee-contaner"}>
                {
                    props.attendees.map((attendee: Attendee, index) => {
                        return (
                            <div key={index} className={"attendee-card"}>
                                <div>{attendee.firstname} {attendee.surname}</div>
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
