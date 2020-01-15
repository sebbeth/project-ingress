import React from 'react';
import './CheckInButton.css';

export interface ICheckInButtonProps {
    onClick(): void;
    checkedIn: boolean;
}

const CheckInButton: React.FC<ICheckInButtonProps> = (props) => {

    return (
        <button
            onClick={() => props.onClick()}
            style={props.checkedIn ? { backgroundColor: "red" } : { backgroundColor: "green" }}
        >
            {props.checkedIn ? "Check Out" : "Check In"}
        </button>
    );
}

export default CheckInButton;
