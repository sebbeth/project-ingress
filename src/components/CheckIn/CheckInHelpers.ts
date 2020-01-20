import Attendee from "../../models/Attendee";

export function filterAttendeesByRoom(attendees: Attendee[], room: string) {
    if (room === "") {
        return attendees;
    }
    return attendees.filter((attendee: Attendee) => (attendee.room === room));
}

export function filterAttendeesBySearch(attendees: Attendee[], search: string) {
    if (search === "") {
        return attendees;
    }
    return attendees.filter((attendee: Attendee) => (
        attendee.firstname.toLowerCase().includes(search) ||
        attendee.surname.toLowerCase().includes(search)
    ))
}