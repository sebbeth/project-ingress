import Attendee from "./models/Attendee";
import Room from "./models/Room";

export function getAttendeeFullName(attendee: Attendee) {
    return attendee.firstname + " " + attendee.surname;
}

export function getRooms() {
    const rooms: Room[] = [
        { id: "1", title: "Room A" },
        { id: "2", title: "Room B" },
        { id: "3", title: "Room C" }
    ];
    return rooms;
}

export function getRoom(id: string, rooms: Room[]) {
    return rooms.find((room) => (room.id === id));
}

// export function getAttendeesForSection(section: string, allAttendees: Attendee[]) {
//     return allAttendees.filter(attendee => (attendee.room === section));
// }

export function getAttendeesFromFirebase() {

}