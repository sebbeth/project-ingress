import Attendee from "../models/Attendee";
const mockAttendees = [

    new Attendee({ firstname: "Elliot", surname: "Brown", checkedIn: false, room: 0 }),
    new Attendee({ firstname: "Elliot", surname: "Black", checkedIn: false, room: 1 }),
    new Attendee({ firstname: "Elliot", surname: "Yellow", checkedIn: false, room: 2 }),
    new Attendee({ firstname: "Elliot", surname: "Green", checkedIn: false, room: 3 }),
    new Attendee({ firstname: "Pete", surname: "Piper", checkedIn: false, room: 4 }),
    new Attendee({ firstname: "Kirsten", surname: "Kale", checkedIn: false, room: 8 }),
    new Attendee({ firstname: "Mark", surname: "Munday", checkedIn: false, room: 5 }),
    new Attendee({ firstname: "Neil", surname: "Nelson", checkedIn: false, room: 8 }),
    new Attendee({ firstname: "David", surname: "Deen", checkedIn: false, room: 2 }),
    new Attendee({ firstname: "Emma", surname: "Emerson", checkedIn: false, room: 2 }),
    new Attendee({ firstname: "Amanda", surname: "Adams", checkedIn: false, room: 2 }),
    new Attendee({ firstname: "Nathan", surname: "Nelson", checkedIn: false, room: 5 }),
    new Attendee({ firstname: "Lauren", surname: "Larkin", checkedIn: false, room: 6 }),
    new Attendee({ firstname: "Cassandra", surname: "Clarke", checkedIn: false, room: 7 })
];


export function getMockAttendees() {
    return [...mockAttendees];
}

export function getMockRegistrations() {
    return [...mockAttendees];
}