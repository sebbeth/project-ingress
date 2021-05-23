import React from 'react';
import './Events.scss';
import Event from '../../models/Event';
import Room from '../../models/Room';
import Attendee from '../../models/Attendee';

export interface IEventsProps {
    events: Event[];
    selectEvent(event: Event): void;
    createEvent(event: Event): void;
}

function generateNewEvent() {
    return new Event({
        name: "New Event",
        attendees: [
            new Attendee({
                firstname: "Billy",
                surname: "Smith",
                checkedIn: false,
                room: "a"
            })
        ],
        rooms: [
            new Room({ title: "Room A" }),
            new Room({ title: "Room B" }),
            new Room({ title: "Room C" })
        ]
    });
}

const Events: React.FC<IEventsProps> = (props) => {
    return (
        <div className="root">
            <div>Events</div>


            <button onClick={() => props.createEvent(generateNewEvent())}>Add Event </button>
            <div className={"events"}>
                {
                    props.events.map((event: Event, index: number) => <EventItem key={index} event={event} selectEvent={props.selectEvent} />)
                }
            </div>
        </div>
    );
}

interface IEventProps {
    event: Event;
    key: number;
    selectEvent(event: Event): void;
}

const EventItem: React.FC<IEventProps> = (props) => {
    const { event, selectEvent, key } = props;
    return (
        <div className={"event"} key={key}>
            <div>{event.name}</div>
            <button onClick={() => selectEvent(event)}>Select</button>
        </div>
    );
}

export default Events;
