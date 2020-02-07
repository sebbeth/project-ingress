import Attendee from "./models/Attendee";
import Room from "./models/Room";

export function getRooms(attendees: Attendee[]) {
    const rooms: Room[] = [
        { id: 1, title: "Room A" },
        { id: 2, title: "Room B" },
        { id: 3, title: "Room C" }
    ];

    return rooms;
}

export function getRoom(id: number, rooms: Room[]) {
    return rooms.find((room) => (room.id === id));
}

// export function getAttendeesForSection(section: string, allAttendees: Attendee[]) {
//     return allAttendees.filter(attendee => (attendee.room === section));
// }

export function getAttendeesFromFirebase() {

}