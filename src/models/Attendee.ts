export default class Attendee {
    public firstname: string = "";
    public surname: string = "";
    public checkedIn: boolean = false;
    constructor(attendee: any) {
        this.firstname = attendee.firstname;
        this.surname = attendee.surname;
    }
}