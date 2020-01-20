import Attendee from "./models/Attendee";

export function getSections(attendees: Attendee[]) {
    const sections: string[] = [];
    attendees.forEach(attendee => {
        if (sections.indexOf(attendee.room) === -1) {
            sections.push(attendee.room);
        }
    });
    return sections;
}

export function getAttendeesForSection(section: string, allAttendees: Attendee[]) {
    return allAttendees.filter(attendee => (attendee.room === section));
}