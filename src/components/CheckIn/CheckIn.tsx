import React from 'react';
import logo from './logo.svg';
import './CheckIn.css';
import { getMockAttendees } from '../../services/MockData';
import Attendee from '../../models/Attendee';
import CheckInButton from '../CheckInButton/CheckInButton';
import SearchField from '../SearchField/SearchField';

export interface ICheckInProps {
    attendees: Attendee[];
}

const CheckIn: React.FC<ICheckInProps> = (props) => {

    function onSearchFieldChanged(event: React.ChangeEvent<HTMLInputElement>) {
        console.log(event);

    }

    return (
        <div className="root">
            <div>Checkin</div>
            <SearchField onChange={(event) => onSearchFieldChanged(event)} />
            <div className={"attendee-contaner"}>
                {
                    props.attendees.map((attendee: Attendee, index) => {
                        return (
                            <div key={index} className={"attendee-card"}>
                                <div>{attendee.firstname} {attendee.surname}</div>
                                <CheckInButton />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default CheckIn;
