import Attendee from "./models/Attendee";

export function getSections(attendees: Attendee[]) {
    const sections: string[] = [];
    attendees.forEach(attendee => {
        if (sections.indexOf(attendee.section) === -1) {
            sections.push(attendee.section);
        }
    });
    return sections;
}

export function getAttendeesForSection(section: string, allAttendees: Attendee[]) {
    return allAttendees.filter(attendee => (attendee.section === section));
}