import Attendee from "../../models/Attendee";
import Room from "../../models/Room";

export function filterAttendeesByRoom(attendees: Attendee[], roomId: number) {
    if (roomId === 0) {
        return attendees;
    }
    return attendees.filter((attendee: Attendee) => (attendee.room === roomId));
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