import Attendee from "../../models/Attendee";
export function filterAttendeesByRoom(attendees: Attendee[], roomId: string) {
    if (roomId === "") {
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
    ));
}