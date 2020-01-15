import Attendee from "../models/Attendee";
const mockAttendees = [

    new Attendee({ firstname: "Elliot", surname: "Brown", checkedIn: false, section: "Sprinkles" }),
    new Attendee({ firstname: "Elliot", surname: "Black", checkedIn: false, section: "M&Ms" }),
    new Attendee({ firstname: "Elliot", surname: "Yellow", checkedIn: false, section: "Hectic" }),
    new Attendee({ firstname: "Elliot", surname: "Green", checkedIn: false, section: "Hectic" }),
    new Attendee({ firstname: "Elliot", surname: "White", checkedIn: false, section: "Sprinkles" })
];


export function getMockAttendees() {
    return mockAttendees;
}