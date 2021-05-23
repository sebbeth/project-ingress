import React from 'react';
import './CheckInButton.scss';
import Button from 'react-bootstrap/Button';

export interface ICheckInButtonProps {
    onClick(): void;
    checkedIn: boolean;
}

const CheckInButton: React.FC<ICheckInButtonProps> = (props) => {

    return (
        <Button
            onClick={() => props.onClick()}
            style={props.checkedIn ? { backgroundColor: "red" } : { backgroundColor: "green" }}
        >
            {props.checkedIn ? "Check Out" : "Check In"}
        </Button>
    );
}

export default CheckInButton;
