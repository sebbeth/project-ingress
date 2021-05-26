import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  useParams,
  useRouteMatch,
  Route,
} from "react-router-dom";
import {
    createRoom,
  getAttendeesRef,
  getEventRef,
  getRoomsRef,
  updateAttendee,
} from "../../data/FirebaseHelpers";
import { useAttendees, useEvent, useRooms } from "../../Hooks";
import Room from "../Room/Room";
import AddAttendee from "../AddAttendee/AddAttendee";
import Attendees from "../Attendees/Attendees";
import CheckIn from "../CheckIn/CheckIn";
import EventSettings from "../EventSettings/EventSettings";
import "./Event.scss";
import Dashboard from "../Dashboard/Dashboard";

export interface IEventProps {}

const Event: React.FC<IEventProps> = (props) => {
  const { eventId } = useParams<{ eventId: string }>();
  const { path, url } = useRouteMatch();


  const {
    event,
    // loading: eventLoading,
    // error: eventError,
  } = useEvent(getEventRef(eventId ?? ""));
  const {
    attendees,
    // loading: attendeesLoading,
    // error: attendeesError,
  } = useAttendees(getAttendeesRef(eventId ?? ""));
  const {
    rooms,
    // loading: roomsLoading,
    // error: roomsError,
  } = useRooms(getRoomsRef(eventId ?? ""));

  return (
    <Router>
      <div>
        <span>Event ID: {eventId}</span>
        <div>
        <Link to={`${url}/`}>
            <button>Overview</button>
          </Link>
          <Link to={`${url}/checkin`}>
            <button>Check In</button>
          </Link>
          <Link to={`${url}/addattendee`}>
            <button>Create Attendee</button>
          </Link>
          <Link to={`${url}/settings`}>
            <button>Settings</button>
          </Link>
          <Link to={`${url}/attendees`}>
            <button>Attendees</button>
          </Link>
        </div>
      </div>
      <Switch>
      <Route exact path={`${path}/`}>
        <Dashboard event={event} />
        </Route>
        <Route exact path={`${path}/checkin`}>
          <CheckIn
            rooms={rooms}
            attendees={attendees}
            updateAttendee={(attendee) => updateAttendee(event.id, attendee)}
          />{" "}
        </Route>
        <Route exact path={`${path}/addattendee`}>
            <AddAttendee/>
        </Route>
        <Route exact path={`${path}/settings`}>
            <EventSettings event={event} rooms={rooms} createRoom={(room) => createRoom(event.id, room)} />
        </Route>
        <Route exact path={`${path}/attendees`}>
            <Attendees/>
        </Route>
        <Route exact path={`${path}/room/:roomId`}>
            <Room/>
        </Route>
      </Switch>
    </Router>
  );
};

export default Event;
