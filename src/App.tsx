import React, { useState, useEffect } from 'react';
import './App.css';
import CheckIn from './components/CheckIn/CheckIn';
import Lookup from './components/Lookup/Lookup';
import { getMockAttendees, getMockRegistrations } from './data/MockData';
import Dashboard from './components/Dashboard/Dashboard';
import Attendee from './models/Attendee';
import { getAttendeesRef, updateAttendee, selectEvent, createEvent, getEventsRef, getEventRef } from './data/FirebaseHelpers';
import { useObject, useList } from 'react-firebase-hooks/database';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Events from './components/Events/Events';
import { useEvents, useEvent, useAttendees } from './Hooks';
import Event from './models/Event';
import Room from './models/Room';


const App: React.FC = () => {
  // const [attendees, setAttendees] = useState(getMockAttendees());
  // const attendees = useAttendees(getAttendeesRef());
  // const [attendees, setAttendees] = useState([] as Attendee[]);
  const [selectedEventId, setSelectedEventId] = useState(localStorage.getItem("selectedEvent"));
  function storeSelectedEventId(eventId: string) {
    localStorage.setItem("selectedEvent", eventId);
    setSelectedEventId(eventId);
  }

  const { events, loading: eventsLoading, error: eventsError } = useEvents(getEventsRef());
  const { event, loading: eventLoading, error: eventError } = useEvent(getEventRef(selectedEventId ?? ""));

  const { attendees, loading: attendeesLoading, error: attendeesError } = useAttendees(getAttendeesRef(selectedEventId ?? ""));
  const rooms: Room[] = event.rooms ?? [];
  // if (values && values.length > 0) {
  //   values.forEach((value, index) => {
  //     attendees.push(new Attendee(value.val()));
  //   })
  // }

  const [registrations, setRegistrations] = useState(getMockRegistrations());

  return (
    <Router>
      <div className="App">
        <div className={"nav"}>
          <div>
            <div>Event: {event.name}</div>
          </div>
          <div>
            <Link to="/"><button>Dashboard</button></Link>
            <Link to="/checkin"><button>Check In</button></Link>
            <Link to="/lookup"><button>Lookup</button></Link>
            <Link to="/events"><button>Switch Event</button></Link>
          </div>
        </div>
        <Switch>
          <Route exact path="/">
            <Dashboard event={event} />
          </Route>
          <Route path="/checkin">
            <CheckIn attendees={attendees} updateAttendee={(attendee) => updateAttendee(event.id, attendee)} />
          </Route>
          <Route path="/lookup">
            <Lookup attendees={attendees} rooms={rooms} />
          </Route>
          <Route path="/events">
            <Events
              events={events}
              selectEvent={(event) => storeSelectedEventId(event.id)}
              createEvent={(event) => createEvent(event)}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
