import React from "react";
import "./EventsList.scss";
import Event from "../../models/Event";
import { Link } from "react-router-dom";
import { Card, Spinner } from "react-bootstrap";
import { useEvents } from "../../Hooks";
import { getEventsRef } from "../../data/FirebaseHelpers";

export interface IEventsListProps {
  createEvent(event: Event): void;
}

// function generateNewEvent() {
//   return new Event({
//     name: "New Event",
//     attendees: [
//       new Attendee({
//         firstname: "Billy",
//         surname: "Smith",
//         checkedIn: false,
//         room: "a",
//       }),
//     ],
//     rooms: [
//       new Room({ title: "Room A" }),
//       new Room({ title: "Room B" }),
//       new Room({ title: "Room C" }),
//     ],
//   });
// }

const EventsList: React.FC<IEventsListProps> = (props) => {
  const {
    events,
    loading: eventsLoading,
    error: eventsError,
  } = useEvents(getEventsRef());

  return (
    <>
      {eventsLoading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {!eventsLoading && !eventsError && (
        <div className={"events"}>
          {events.map((event, index) => (
            <EventsListItem key={index} event={event} />
          ))}
        </div>
      )}
    </>
  );
};

interface IEventProps {
  event: Event;
  key: number;
}

const EventsListItem: React.FC<IEventProps> = (props) => {
  const { event, key } = props;
  return (
    <div key={key}>
      <Card>
        <Card.Body>
          <Card.Title>{event.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">dd/mm/yyyy</Card.Subtitle>
          <Card.Text>Description</Card.Text>
          <Link to={`/event/${event.id}/settings`}>
            <Card.Link>Settings</Card.Link>
          </Link>
          <Link to={`/event/${event.id}`}>
            <Card.Link>View Event</Card.Link>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EventsList;
