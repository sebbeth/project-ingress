import React from 'react';
import './Events.css';
import Event from '../../models/Event';

export interface IEventsProps {
    events: Event[];
    selectEvent(event: Event): void;
    createEvent(event: Event): void;
}

const Events: React.FC<IEventsProps> = (props) => {
    return (
        <div className="root">
            <div>Events</div>
            <button onClick={() => props.createEvent(new Event({ name: "New Event" }))}>Add Event </button>
            <div className={"events"}>
                {
                    props.events.map((event: Event, index: number) => <EventItem event={event} selectEvent={props.selectEvent} />)
                }
            </div>
        </div>
    );
}

const EventItem: React.FC<{ event: Event, selectEvent(event: Event): void }> = (props) => {
    const { event, selectEvent } = props;
    return (
        <div className={"event"}>
            <div>{event.name}</div>
            <button onClick={() => selectEvent(event)}></button>
        </div>
    );
}

export default Events;
