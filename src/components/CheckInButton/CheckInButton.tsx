import React from 'react';
import logo from './logo.svg';
import './CheckInButton.css';

const CheckInButton: React.FC = () => {

    const [checkedIn, setCheckedIn] = React.useState(false);
    function onClick() {
        setCheckedIn(!checkedIn);
    }


    return (
        <button
            onClick={() => onClick()}
            style={checkedIn ? { backgroundColor: "red" } : { backgroundColor: "green" }}
        >
            {checkedIn ? "Check Out" : "Check In"}
        </button>
    );
}

export default CheckInButton;
