export default class Attendee {
    public firstname: string = "";
    public surname: string = "";
    public checkedIn: boolean = false;
    public room: string = "";
    constructor(attendee: any) {
        this.firstname = attendee.firstname;
        this.surname = attendee.surname;
        this.room = attendee.room;
    }

    public getFullname() {
        return this.firstname + " " + this.surname;
    }
}