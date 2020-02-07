export default class Room {
    public id: number;
    public title: string;
    constructor(room: any) {
        this.id = room.id;
        this.title = room.title;
    }
}