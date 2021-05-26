import React from "react";
import "./EventsList.scss";
import Event from "../../models/Event";
import Room from "../../models/Room";
import Attendee from "../../models/Attendee";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

export interface IEventsListProps {
  events: Event[];
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
        room: "a",
      }),
    ],
    rooms: [
      new Room({ title: "Room A" }),
      new Room({ title: "Room B" }),
      new Room({ title: "Room C" }),
    ],
  });
}

const EventsList: React.FC<IEventsListProps> = (props) => {
  return (
    <div className="root">
      <div>EventsList</div>

      <button onClick={() => props.createEvent(generateNewEvent())}>
        Add Event{" "}
      </button>
      <div className={"events"}>
        {props.events.map((event: Event, index: number) => (
          <EventItem key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

interface IEventProps {
  event: Event;
  key: number;
}

const EventItem: React.FC<IEventProps> = (props) => {
  const { event, key } = props;
  return (
    <div className={"event"} key={key}>
      <div>{event.name}</div>
      <Link to="/event/123">
      <Button >View Event</Button>
      </Link>
    </div>
  );
};

export default EventsList;
