export default class Attendee {
    public firstname: string = "";
    public surname: string = "";
    public checkedIn: boolean = false;
    public section: string = "";
    constructor(attendee: any) {
        this.firstname = attendee.firstname;
        this.surname = attendee.surname;
        this.section = attendee.section;
    }
}