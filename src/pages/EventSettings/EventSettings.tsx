import React from 'react';
import logo from './logo.svg';
import './EventSettings.scss';
import Attendee from '../../models/Attendee';
import Room from '../../models/Room';
import Event from '../../models/Event';

export interface ITemplateProps {
    rooms: Room[];
    event: Event;
    createRoom(room: Room): void;
}

const EventSettings: React.FC<ITemplateProps> = (props) => {
    const { rooms, createRoom } = props;
    return (
        <div className="root">
            <div>Settings</div>
            <div className="rooms">
                {
                    rooms.map((room, index) => <RoomItem key={index} room={room} />)
                }
            </div>
            <button onClick={() => createRoom(new Room({ title: "New Room" }))}>Add Room</button>
        </div>
    );
}

const RoomItem: React.FC<{ key: number, room: Room }> = (props) => {
    const { room, key } = props;
    return (
        <div key={key} className="roomItem">
            <div>{room.title}</div>
        </div>
    );
}

export default EventSettings;
