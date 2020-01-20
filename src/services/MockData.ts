import Attendee from "../models/Attendee";
const mockAttendees = [

    new Attendee({ firstname: "Elliot", surname: "Brown", checkedIn: false, room: "Sprinkles" }),
    new Attendee({ firstname: "Elliot", surname: "Black", checkedIn: false, room: "M&Ms" }),
    new Attendee({ firstname: "Elliot", surname: "Yellow", checkedIn: false, room: "Hectic" }),
    new Attendee({ firstname: "Elliot", surname: "Green", checkedIn: false, room: "Hectic" }),
    new Attendee({ firstname: "Pete", surname: "Piper", checkedIn: false, room: "Khaos" }),
    new Attendee({ firstname: "Kirsten", surname: "Kale", checkedIn: false, room: "Jelly Beans" }),
    new Attendee({ firstname: "Mark", surname: "Munday", checkedIn: false, room: "Jelly Beans" }),
    new Attendee({ firstname: "Neil", surname: "Nelson", checkedIn: false, room: "Jelly Beans" }),
    new Attendee({ firstname: "David", surname: "Deen", checkedIn: false, room: "Tic Tacs" }),
    new Attendee({ firstname: "Emma", surname: "Emerson", checkedIn: false, room: "Tic Tacs" }),
    new Attendee({ firstname: "Amanda", surname: "Adams", checkedIn: false, room: "Tic Tacs" }),
    new Attendee({ firstname: "Nathan", surname: "Nelson", checkedIn: false, room: "Khaos" }),
    new Attendee({ firstname: "Lauren", surname: "Larkin", checkedIn: false, room: "Hectic" }),
    new Attendee({ firstname: "Cassandra", surname: "Clarke", checkedIn: false, room: "Hectic" })
];


export function getMockAttendees() {
    return [...mockAttendees];
}

export function getMockRegistrations() {
    return [...mockAttendees];
}