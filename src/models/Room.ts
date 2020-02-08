export default class Room {
    public id: string;
    public title: string;
    constructor(room: any) {
        this.id = room.id ? room.id : null;
        this.title = room.title;
    }
}