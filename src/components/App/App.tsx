import React, { useState, useEffect } from 'react';
import './App.css';
import CheckIn from '../CheckIn/CheckIn';
import Lookup from '../Lookup/Lookup';
import { getMockAttendees, getMockRegistrations } from '../../data/MockData';
import Dashboard from '../Dashboard/Dashboard';
import Attendee from '../../models/Attendee';
import { getAttendeesRef, updateAttendee, selectEvent, createEvent, getEventsRef, getEventRef, createRoom, getRoomsRef } from '../../data/FirebaseHelpers';
import { useObject, useList } from 'react-firebase-hooks/database';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Events from '../Events/Events';
import { useEvents, useEvent, useAttendees, useRooms } from '../../Hooks';
import Event from '../../models/Event';
import Room from '../../models/Room';
import EventSettings from '../EventSettings/EventSettings';


const App: React.FC = () => {

  const [selectedEventId, setSelectedEventId] = useState(localStorage.getItem("selectedEvent"));
  function storeSelectedEventId(eventId: string) {
    localStorage.setItem("selectedEvent", eventId);
    setSelectedEventId(eventId);
  }

  const { events, loading: eventsLoading, error: eventsError } = useEvents(getEventsRef());
  const { event, loading: eventLoading, error: eventError } = useEvent(getEventRef(selectedEventId ?? ""));
  const { attendees, loading: attendeesLoading, error: attendeesError } = useAttendees(getAttendeesRef(selectedEventId ?? ""));
  const { rooms, loading: roomsLoading, error: roomsError } = useRooms(getRoomsRef(selectedEventId ?? ""));

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
            <Link to="/settings"><button>Event Settings</button></Link>
            <Link to="/events"><button>Switch Event</button></Link>
          </div>
        </div>
        <Switch>
          <Route exact path="/">
            <Dashboard event={event} />
          </Route>
          <Route path="/checkin">
            <CheckIn rooms={rooms} attendees={attendees} updateAttendee={(attendee) => updateAttendee(event.id, attendee)} />
          </Route>
          <Route path="/lookup">
            <Lookup attendees={attendees} rooms={rooms} />
          </Route>
          <Route path="/settings">
            <EventSettings event={event} rooms={rooms} createRoom={(room) => createRoom(event.id, room)} />
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
