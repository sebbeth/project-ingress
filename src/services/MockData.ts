import Attendee from "../models/Attendee";
const mockAttendees = [

    new Attendee({ firstname: "Elliot", surname: "Brown", checkedIn: false }),
    new Attendee({ firstname: "Elliot", surname: "Brown", checkedIn: false }),
    new Attendee({ firstname: "Elliot", surname: "Brown", checkedIn: false }),
    new Attendee({ firstname: "Elliot", surname: "Brown", checkedIn: false }),
    new Attendee({ firstname: "Elliot", surname: "Brown", checkedIn: false })
];


export function getMockAttendees() {
    return mockAttendees;
}