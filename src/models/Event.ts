import Attendee from "./Attendee";
import Room from "./Room";

export default class Event {

    public id: string = "";
    public name: string = "";
    public startDate: Date = new Date();
    public endDate: Date = new Date();
    public attendees: Attendee[] = [];
    public rooms: Room[] = [];

    constructor(event?: any) {
        if (!event) {
            return this;
        }
        this.id = event.id ? event.id : null;
        this.name = event.name;
        this.startDate = event.startDate ? event.startDate : null;
        this.endDate = event.endDate ? event.endDate : null;
        this.attendees = event.attendees ? event.attendees : [];
        this.rooms = event.rooms ? event.rooms : [];
    }
}