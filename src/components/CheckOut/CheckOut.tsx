import React from 'react';
import logo from './logo.svg';
import './CheckOut.css';
import Attendee from '../../models/Attendee';
import SearchField from '../SearchField/SearchField';
import CheckInButton from '../CheckInButton/CheckInButton';

export interface ICheckOutProps {
    attendees: Attendee[];
}


const CheckOut: React.FC<ICheckOutProps> = (props) => {
    return (
        <div className="root">
            CheckOut
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

export default CheckOut;
