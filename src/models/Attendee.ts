export default class Attendee {

    public id: string = "";
    public firstname: string;
    public surname: string;
    public checkedIn: boolean = false;
    public room: string;
    constructor(attendee: any, id?: string) {
        if (id) this.id = id;
        if (attendee.id) this.id = attendee.id;
        this.firstname = attendee.firstname;
        this.surname = attendee.surname;
        this.room = attendee.room;
        this.checkedIn = attendee.checkedIn;
    }
}